import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-6"
    >

      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-blue-400 mb-8"
        >
          Contact Me
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-400 text-lg mb-14"
        >
          Feel free to contact me for opportunities, collaborations,
          or project discussions.
        </motion.p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05 }}

            className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-2xl transition"
          >

            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              Email
            </h3>

            <p className="text-gray-300 mb-6">
              sanjaykajbe8888@gmail.com
            </p>

            <a
              href="mailto:sanjaykajbe8888@gmail.com"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl transition inline-block"
            >
              Send Email
            </a>

          </motion.div>

          {/* GitHub */}
          <motion.div
            whileHover={{ scale: 1.05 }}

            className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-2xl transition"
          >

            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              GitHub
            </h3>

            <p className="text-gray-300 mb-6">
              github.com/SanjayKajbe
            </p>

            <a
              href="https://github.com/SanjayKajbe"
              target="_blank"
              rel="noreferrer"
              className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-xl transition inline-block"
            >
              Visit GitHub
            </a>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Contact;