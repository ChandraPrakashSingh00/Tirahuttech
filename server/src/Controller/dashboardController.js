const Visitor = require('../models/Visitor');
const Event = require('../models/Event');
const Session = require('../models/Session');
const Lead = require('../models/Lead');

// Helper: group by date in MongoDB
function groupByDay(field = "createdAt") {
    return {
        $dateToString: {
            format: "%Y-%m-%d",
            date: `$${field}`,
        }
    };
}

exports.getDashboard = async (req, res) => {
    try {
        const now = new Date();
        const last30 = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
        const last7 = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

        // ------------------------------
        // 1. BASIC COUNTERS
        // ------------------------------

        const totalVisitors = await Visitor.countDocuments();
        const totalEvents = await Event.countDocuments();
        const totalSessions = await Session.countDocuments();
        const totalLeads = await Lead.countDocuments();

        // ------------------------------
        // 2. DAILY VISITORS (last 30 days)
        // ------------------------------

        const dailyVisitors = await Visitor.aggregate([
            { $match: { lastSeen: { $gte: last30 } } },
            {
                $group: {
                    _id: { day: { $dateToString: { format: "%Y-%m-%d", date: "$lastSeen" } }, visitor: "$visitorId" }
                }
            },
            { $group: { _id: "$_id.day", count: { $sum: 1 } } },
            { $sort: { _id: 1 } }
        ]);


        // ------------------------------
        // 3. DAILY EVENTS (last 30 days)
        // ------------------------------

        const dailyEvents = await Event.aggregate([
            { $match: { createdAt: { $gte: last30 } } },
            {
                $group: {
                    _id: groupByDay("createdAt"),
                    count: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } }
        ]);

        // ------------------------------
        // 4. TOP PAGES
        // ------------------------------

        const topPages = await Event.aggregate([
            { $match: { eventType: "page_view" } },
            {
                $group: {
                    _id: "$url",
                    views: { $sum: 1 }
                }
            },
            { $sort: { views: -1 } },
            { $limit: 10 }
        ]);

        // ------------------------------
        // 5. DEVICE BREAKDOWN
        // ------------------------------

        const devices = await Event.aggregate([
            { $match: { eventType: "device_info" } },
            {
                $group: {
                    _id: "$properties.deviceType",
                    count: { $sum: 1 }
                }
            }
        ]);

        // ------------------------------
        // 6. REFERRER BREAKDOWN
        // ------------------------------

        const referrers = await Event.aggregate([
            { $match: { eventType: "page_view" } },
            {
                $group: {
                    _id: "$properties.referrer",
                    count: { $sum: 1 }
                }
            },
            { $sort: { count: -1 } }
        ]);

        // ------------------------------
        // 7. ACTIVE SESSIONS (last 15 mins)
        // ------------------------------

        const activeSince = new Date(Date.now() - 15 * 60 * 1000);

        const activeSessions = await Session.countDocuments({
            updatedAt: { $gte: activeSince }
        });

        // ------------------------------
        // 8. LEAD FUNNEL
        // ------------------------------

        const leadStages = await Lead.aggregate([
            {
                $group: {
                    _id: "$stage",
                    count: { $sum: 1 }
                }
            }
        ]);

        const conversions = await Lead.countDocuments({
            stage: { $in: ["qualified", "interested", "closed"] }
        });

        const conversionRate =
            totalVisitors > 0 ? (conversions / totalVisitors) * 100 : 0;

        // ------------------------------
        // 9. RETURN DASHBOARD PAYLOAD
        // ------------------------------

        res.json({
            ok: true,
            stats: {
                totals: {
                    visitors: totalVisitors,
                    events: totalEvents,
                    sessions: totalSessions,
                    leads: totalLeads
                },
                activity: {
                    dailyVisitors,
                    dailyEvents
                },
                pages: topPages,
                devices,
                referrers,
                active: {
                    sessions: activeSessions
                },
                leads: {
                    stages: leadStages,
                    conversionRate: conversionRate.toFixed(2)
                }
            }
        });

    } catch (err) {
        console.error("dashboard error", err);
        res.status(500).json({ error: "dashboard_failed" });
    }
};
