import { motion } from "framer-motion";
import sanjay from "../assets/sanjay.jpeg";

function About() {
  return (
    <section id="about" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={sanjay}
            alt="Sanjay"
            className="rounded-3xl shadow-2xl w-full max-w-md mx-auto object-cover border-4 border-blue-500"
          />
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold text-blue-400 mb-6">About Me</h2>

          <p className="text-gray-300 text-lg leading-8 mb-4">
            I build modern web experiences with clean UI, strong fundamentals, and 
            a focus on delivering real-world value.
          </p>

          <p className="text-gray-400 leading-8 mb-4">
            My toolkit includes React and Tailwind for frontend development, along with PHP, Python, 
            MongoDB, and MySQL for building full-stack applications.

          </p>

          <p className="text-gray-400 leading-8">
           I am continuously learning and growing as a software developer, with the goal of creating impactfu
           l and user-friendly digital solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
