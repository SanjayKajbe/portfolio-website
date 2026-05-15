import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaGithub,
  FaDatabase,
  FaPython,
  FaPhp,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: FaHtml5, color: "text-orange-400" },
    { name: "CSS", icon: FaCss3Alt, color: "text-sky-400" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
    { name: "Python", icon: FaPython, color: "text-indigo-400" },
    { name: "PHP", icon: FaPhp, color: "text-purple-400" },
    { name: "MongoDB", icon: FaDatabase, color: "text-emerald-400" },
    { name: "MySQL", icon: FaDatabase, color: "text-blue-300" },
    { name: "GitHub", icon: FaGithub, color: "text-white" },
  ];

  return (
    <section id="skills" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-blue-400 text-center mb-16"
        >
          My Skills
        </motion.h2>

        {/* Floating / icon cards (replaces simple box grid) */}
        <div className="relative">
          <div className="absolute inset-0 -z-10 opacity-60">
            <div className="absolute -top-10 left-10 w-48 h-48 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-12 right-10 w-56 h-56 rounded-full bg-fuchsia-500/15 blur-3xl" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/40 p-5 shadow-lg"
                >
                  {/* glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.35),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl border border-gray-700 bg-black/30 flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                      <Icon className={`text-2xl ${skill.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-200">
                      {skill.name}
                    </h3>
                  </div>

                  {/* floating micro-interaction */}
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                      opacity: [0.75, 1, 0.75],
                    }}
                    transition={{ duration: 2 + index * 0.15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-blue-500/10 blur-2xl"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

