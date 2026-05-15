import { motion } from "framer-motion";

function Roadmap() {

  const roadmapData = [
    {
      year: "2018-2019",
      title: "SSC",
      desc: "Completed SSC from Sharada Vidya Mandir, Rahata."
    },
    {
      year: "2020-2021",
      title: "HSC",
      desc: "Completed HSC from Deogiri College, Sambhajinagar."
    },
    {
      year: "2021-2024",
      title: "BCA",
      desc: "Completed Bachelor of Computer Applications from Shivchhatrapati College."
    },
    {
      year: "2024-2026",
      title: "MCA",
      desc: "Currently pursuing MCA from Dr. Vitthalrao Vikhe Patil College."
    },
    {
      year: "Projects",
      title: "Development Journey",
      desc: "Built projects like Krishi Mart, Hospital Management System, and Attendance System."
    },
    {
      year: "Future Goal",
      title: "Software Engineer",
      desc: "Aim to become a skilled Full Stack Developer and Software Engineer."
    }
  ];

  return (
    <section
      id="roadmap"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-blue-400 text-center mb-20"
        >
          Career Roadmap
        </motion.h2>

        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-blue-500/40 via-blue-500 to-cyan-500/40 rounded-full" />

          {/* Timeline Items */}
          <div className="space-y-24">

            {roadmapData.map((item, index) => {

              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative grid grid-cols-1 md:grid-cols-2 items-center"
                >

                  {/* LEFT SIDE */}
                  <div
                    className={`${
                      isLeft
                        ? "md:pr-16 text-right"
                        : "md:pr-16"
                    }`}
                  >
                    {isLeft && (
                      <>
                        <span className="text-blue-400 font-semibold">
                          {item.year}
                        </span>

                        <h3 className="text-3xl font-bold mt-2">
                          {item.title}
                        </h3>

                        <p className="text-gray-400 mt-4 leading-7">
                          {item.desc}
                        </p>
                      </>
                    )}
                  </div>

                  {/* RIGHT SIDE */}
                  <div
                    className={`${
                      !isLeft
                        ? "md:pl-16 text-left"
                        : "md:pl-16"
                    }`}
                  >
                    {!isLeft && (
                      <>
                        <span className="text-blue-400 font-semibold">
                          {item.year}
                        </span>

                        <h3 className="text-3xl font-bold mt-2">
                          {item.title}
                        </h3>

                        <p className="text-gray-400 mt-4 leading-7">
                          {item.desc}
                        </p>
                      </>
                    )}
                  </div>

                  {/* CENTER DOT */}
                  <div className="absolute left-1/2 top-5 -translate-x-1/2">
                    <motion.div
                      className="w-6 h-6 rounded-full bg-blue-500 border-4 border-black shadow-[0_0_25px_rgba(59,130,246,0.8)]"
                      animate={{
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    />
                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;