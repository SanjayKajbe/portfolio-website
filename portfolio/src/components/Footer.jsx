function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-8 px-6">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        <p>
          © 2026 Sanjay Kajbe. All rights reserved.
        </p>

        <div className="flex gap-6">

          <a
            href="https://github.com/SanjayKajbe"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>

          <a
            href="mailto:sanjaykajbe8888@gmail.com"
            className="hover:text-blue-400 transition"
          >
            Email
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;