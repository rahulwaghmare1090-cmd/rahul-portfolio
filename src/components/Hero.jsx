import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Hero() {
  return (
    <section
      id="home"
      className="px-6 md:px-20 py-16 border-b border-slate-800"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-cyan-400 text-lg mb-2">Hello, I am</p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Rahul Waghmare
          </h1>

          <h2 className="text-3xl text-slate-300 mb-6">
            Senior Full Stack Developer
          </h2>

          <p className="text-slate-400 text-lg leading-8 mb-8">
            9+ years of experience in React.js, Node.js, Angular, TypeScript,
            JavaScript, MySQL, MongoDB , Docker, and scalable enterprise
            applications.
          </p>
          <div className="flex gap-4">
            <a
              href="/Rahul_Waghmare_Resume.pdf"
              download
              className="bg-cyan-500 px-6 py-3 rounded-2xl text-black font-semibold hover:bg-cyan-400 transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-cyan-500 px-6 py-3 rounded-2xl text-cyan-400 hover:bg-cyan-500 hover:text-black transition"
            >
              Contact Me
            </a>
            {/* <a
              href="https://github.com/rahulwaghmare1090-cmd"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 px-6 py-3 rounded-2xl hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              GitHub
            </a> */}

            <a
              href="https://github.com/rahulwaghmare1090-cmd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition duration-300 text-2xl"
            >
              <FaGithub />
            </a>

            {/* <a
              href="https://linkedin.com/in/rahul-waghmare-211a27381"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 px-6 py-3 rounded-2xl hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              LinkedIn
            </a> */}
            <a
              href="https://linkedin.com/in/rahul-waghmare-211a27381"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition duration-300 text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 p-1 shadow-2xl">
            <img
              src="/profile.jpg"
              alt="Rahul Waghmare"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
