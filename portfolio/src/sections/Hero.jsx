import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaCode } from "react-icons/fa";

// Home/Hero section (premium theme)


function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_15%_70%,rgba(168,85,247,0.18),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(34,211,238,0.12),transparent_40%)]" />

      {/* Animated orbs */}
      <motion.div
        className="absolute -top-10 left-[-5%] w-72 h-72 bg-blue-500/25 blur-3xl rounded-full"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-8%] right-[-5%] w-80 h-80 bg-fuchsia-500/20 blur-3xl rounded-full"
        animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 text-center w-full"
      >
        {/* Title */}
        <div className="inline-flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-2 mb-6">
          <span className="text-blue-400">
            <FaCode />
          </span>
          <p className="text-sm sm:text-base text-gray-200 font-medium">
            MCA Student • Web Development • Software Engineering
          </p>
        </div>

        <p className="text-blue-400 text-base sm:text-lg mb-4">
          Hello, My Name Is
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-5">
          Sanjay Kajbe
        </h1>

        <p className="text-gray-300 text-base sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
          Building modern digital experiences with clean UI, strong
          fundamentals, and real-world projects.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="/resume/My_Resume.pdf"
            download
            className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 px-8 py-4 rounded-2xl text-lg font-semibold transition shadow-[0_0_30px_rgba(59,130,246,0.25)]"
          >
            <span className="relative z-10">Download Resume</span>
            <span className="block sm:hidden mt-1 text-xs opacity-90">PDF</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="border border-blue-500/60 text-blue-300 hover:bg-blue-500/15 hover:text-white px-8 py-4 rounded-2xl text-lg font-semibold transition bg-white/5 backdrop-blur"
          >
            Contact Me
          </motion.a>
        </div>

        {/* Social mini strip */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <motion.a
            whileHover={{ y: -3 }}
            className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 inline-flex items-center justify-center hover:border-blue-400/60 hover:text-blue-200 transition"
            href="https://github.com/SanjayKajbe"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ y: -3 }}
            className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 inline-flex items-center justify-center hover:border-blue-400/60 hover:text-blue-200 transition"
            href="#contact"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </motion.a>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient -to-t from-black to-transparent" />
    </section>
  );
}

export default Hero;

