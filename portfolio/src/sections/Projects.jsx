import { motion } from "framer-motion";

// ===== IMPORT PROJECT IMAGES HERE LATER =====
// Example:
import krishi from "../assets/projects/Krishi_mart.png";
// import hospital from "../assets/projects/hospital.png";
// import attendance from "../assets/projects/attendance.png";

function Projects() {

  const projectData = [

    {
      title: "Krishi Mart",
      tech: "Python, HTML, CSS, JavaScript, MySQL",
      desc: "Agriculture e-commerce platform where farmers can sell products online.",
      image: krishi,
    },

    {
      title: "Hospital Management System",
      tech: "Python, Django, MongoDB",
      desc: "System for managing patients, doctors, and hospital records.",

      // ===== ADD IMAGE HERE LATER =====
      // image: hospital,

      color: "from-blue-500 to-cyan-700"
    },

    {
      title: "Digital Attendance System",
      tech: "PHP, MySQL, JavaScript",
      desc: "Web-based attendance tracking system for students.",

      // ===== ADD IMAGE HERE LATER =====
      // image: attendance,

      color: "from-purple-500 to-pink-700"
    }

  ];

  return (
    <section
      id="projects"
      className="bg-black text-white py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}

          className="text-5xl font-bold text-blue-400 text-center mb-16"
        >
          Projects
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projectData.map((project, index) => (

            <motion.div
              key={index}

              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.7,
                delay: index * 0.2
              }}

              whileHover={{
                y: -10
              }}

              className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-2xl transition duration-300"
            >

              {/* ===== CURRENT GRADIENT DESIGN ===== */}
              {/* REMOVE THIS DIV WHEN YOU ADD REAL IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
                />

              {/* ===== ADD IMAGE CODE HERE LATER ===== */}
              {/*
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              */}

              {/* Content */}
              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-blue-400 mb-4">
                  {project.tech}
                </p>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.desc}
                </p>

                {/* Buttons */}
                <div className="flex gap-4">

                  <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl transition">
                    GitHub
                  </button>

                  <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-5 py-2 rounded-xl transition">
                    Live Demo
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;