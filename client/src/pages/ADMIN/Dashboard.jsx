import React, { useEffect, useState } from "react";
import axios from "axios";


import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";

export default function Dashboard() {
    const [data, setData] = useState(null);
    const VITE_API_URL = import.meta.env.VITE_API_URL;

    async function fetchDashboard() {
        const res = await axios.get(`${VITE_API_URL}/dashboard`);
        return res.data;
    }
    useEffect(() => {
        fetchDashboard().then((res) => setData(res.stats));
    }, []);

    if (!data) return <div className="p-10 text-xl">Loading dashboard...</div>;

    const dailyVisitors = data.activity.dailyVisitors.map((d) => ({
        day: d._id,
        count: d.count,
    }));

    const dailyEvents = data.activity.dailyEvents.map((d) => ({
        day: d._id,
        count: d.count,
    }));

    return (
        <div className="px-6 pt-32 sm:pt-36 md:pt-28 lg:pt-28 pb-16 space-y-10">
            {/* Totals */}
            <div className="grid grid-cols-4 gap-4">
                <StatCard title="Visitors" value={data.totals.visitors} />
                <StatCard title="Events" value={data.totals.events} />
                <StatCard title="Sessions" value={data.totals.sessions} />
                <StatCard title="Leads" value={data.totals.leads} />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-2 gap-6">
                <ChartCard title="Daily Visitors (30 days)">
                    <LineChart width={500} height={250} data={dailyVisitors}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="count" stroke="#2563eb" strokeWidth={2} />
                    </LineChart>
                </ChartCard>

                <ChartCard title="Daily Events (30 days)">
                    <LineChart width={500} height={250} data={dailyEvents}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="count" stroke="#16a34a" strokeWidth={2} />
                    </LineChart>
                </ChartCard>
            </div>

            {/* Top Pages */}
            <div>
                <h2 className="text-xl font-semibold mb-3">Top Pages</h2>
                <table className="w-full text-left border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2 border">URL</th>
                            <th className="p-2 border">Views</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.pages.map((p, index) => (
                            <tr key={index} className="border">
                                <td className="p-2">{p._id}</td>
                                <td className="p-2">{p.views}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Devices */}
            <div>
                <h2 className="text-xl font-semibold mb-3">Devices</h2>
                <ul className="space-y-2">
                    {data.devices.map((dev, index) => (
                        <li key={index} className="border p-2 rounded">
                            {dev._id || "Unknown"} — {dev.count}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Referrers */}
            <div>
                <h2 className="text-xl font-semibold mb-3">Referrers</h2>
                <ul className="space-y-2">
                    {data.referrers.map((ref, index) => (
                        <li key={index} className="border p-2 rounded">
                            {ref._id || "Direct"} — {ref.count}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Lead Funnel */}
            <div>
                <h2 className="text-xl font-semibold mb-3">Lead Funnel</h2>
                <ul className="space-y-2">
                    {data.leads.stages.map((s, index) => (
                        <li key={index} className="border p-2 rounded">
                            {s._id || "unknown"} — {s.count}
                        </li>
                    ))}
                </ul>

                <div className="text-lg mt-2">
                    Conversion Rate: {data.leads.conversionRate}%
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value }) {
    return (
        <div className="p-5 border rounded shadow-sm bg-white">
            <div className="text-gray-600 text-sm">{title}</div>
            <div className="text-2xl font-bold">{value}</div>
        </div>
    );
}

function ChartCard({ title, children }) {
    return (
        <div className="p-5 border rounded shadow-sm bg-white">
            <h3 className="text-lg mb-3 font-semibold">{title}</h3>
            {children}
        </div>
    );
}
