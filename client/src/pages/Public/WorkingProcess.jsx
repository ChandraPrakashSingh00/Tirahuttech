import { motion } from "framer-motion";

const process = [
  {
    id: 1,
    title: "Requirements & Brainstorming",
    desc: "Gathering requirements and exploring ideas for a clear project vision.",
    top: false,
  },
  {
    id: 2,
    title: "UI/UX Designing",
    desc: "Crafting intuitive designs focused on seamless user experiences.",
    top: true,
  },
  {
    id: 3,
    title: "Development",
    desc: "Turning designs into fully functional, reliable digital products.",
    top: false,
  },
  {
    id: 4,
    title: "Testing & UAT",
    desc: "Ensuring flawless performance through thorough testing and user validation.",
    top: true,
  },
  {
    id: 5,
    title: "Deploy & Support",
    desc: "Seamlessly deploying solutions and providing ongoing reliable support.",
    top: false,
  },
];

export default function WorkingProcess() {
  return (
    <section className="bg-[#01686d] py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">

        {/* ========================================================= */}
        {/* SECTION HEADING */}
        {/* ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Our Working Process
          </h2>

          <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-white/75 leading-6 sm:leading-7 md:leading-8">
            Streamlined Process Ensuring Quality and Efficiency in Every Project
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* DESKTOP TIMELINE - LG AND ABOVE */}
        {/* ========================================================= */}

        <div className="hidden lg:block relative">

          {/* Main Timeline */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[6px] xl:h-[8px] bg-white/30 rounded-full">

            {/* Timeline Active Segments */}
            <div className="absolute left-0 w-1/5 h-full bg-white rounded-l-full" />

            <div className="absolute left-[40%] w-1/5 h-full bg-white" />

            <div className="absolute right-0 w-1/5 h-full bg-white rounded-r-full" />

          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-5">

            {process.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: item.top ? -35 : 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                className="relative h-[480px] xl:h-[520px]"
              >

                {/* ================================================= */}
                {/* VERTICAL CONNECTOR */}
                {/* ================================================= */}

                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-[2px] bg-white/40 ${
                    item.top
                      ? "top-0 h-1/2"
                      : "bottom-0 h-1/2"
                  }`}
                />

                {/* ================================================= */}
                {/* CENTER DIAMOND */}
                {/* ================================================= */}

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 135,
                    }}
                    transition={{ duration: 0.25 }}
                    className="w-6 h-6 xl:w-7 xl:h-7 rotate-45 bg-white border-4 border-[#01686d] shadow-lg"
                  />
                </div>

                {/* ================================================= */}
                {/* NUMBER CIRCLE */}
                {/* ================================================= */}

                <div
                  className={`absolute left-1/2 -translate-x-1/2 z-20 ${
                    item.top ? "top-0" : "bottom-0"
                  }`}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{ duration: 0.2 }}
                    className="w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full bg-white text-[#01686d] flex items-center justify-center text-xl lg:text-2xl xl:text-4xl font-bold shadow-xl border-4 border-[#01686d]"
                  >
                    {item.id}
                  </motion.div>
                </div>

                {/* ================================================= */}
                {/* CONTENT */}
                {/* ================================================= */}

                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-[90%] xl:w-full max-w-[250px] xl:max-w-[280px] ${
                    item.top
                      ? "bottom-20 xl:bottom-24"
                      : "top-20 xl:top-24"
                  }`}
                >
                  <div className="text-center">

                    <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-white leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-3 lg:mt-4 text-xs lg:text-sm xl:text-base text-white/70 leading-5 lg:leading-6 xl:leading-7">
                      {item.desc}
                    </p>

                  </div>
                </div>

              </motion.div>
            ))}

          </div>
        </div>

        {/* ========================================================= */}
        {/* TABLET TIMELINE */}
        {/* ========================================================= */}

        <div className="hidden sm:block lg:hidden">

          <div className="relative max-w-3xl mx-auto">

            {/* Vertical Timeline Line */}
            <div className="absolute left-[31px] top-0 bottom-0 w-[4px] bg-white/25 rounded-full">

              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-full" />

            </div>

            {/* Process Items */}
            <div className="space-y-10 md:space-y-12">

              {process.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    x: -40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-6"
                >

                  {/* Number */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-white text-[#01686d] flex items-center justify-center text-2xl font-bold shadow-xl border-4 border-[#01686d]"
                  >
                    {item.id}
                  </motion.div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-2xl p-6 md:p-7 shadow-xl">

                    <h3 className="text-xl md:text-2xl font-bold text-[#01686d] leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm md:text-base text-gray-500 leading-6 md:leading-7">
                      {item.desc}
                    </p>

                    {/* White Accent */}
                    <div className="mt-5 w-12 h-1 bg-[#01686d] rounded-full" />

                  </div>

                </motion.div>
              ))}

            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* MOBILE TIMELINE */}
        {/* ========================================================= */}

        <div className="sm:hidden">

          <div className="relative">

            {/* Vertical Timeline Line */}
            <div className="absolute left-[24px] top-0 bottom-0 w-[3px] bg-white/25 rounded-full">

              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-full" />

            </div>

            {/* Process Items */}
            <div className="space-y-8">

              {process.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-4"
                >

                  {/* Number */}
                  <motion.div
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white text-[#01686d] flex items-center justify-center text-lg font-bold shadow-lg border-4 border-[#01686d]"
                  >
                    {item.id}
                  </motion.div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-xl p-4 shadow-lg">

                    <h3 className="text-lg font-bold text-[#01686d] leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500 leading-6">
                      {item.desc}
                    </p>

                    {/* Accent */}
                    <div className="mt-4 w-10 h-1 bg-[#01686d] rounded-full" />

                  </div>

                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
