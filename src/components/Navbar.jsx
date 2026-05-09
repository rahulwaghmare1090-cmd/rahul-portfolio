export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Rahul<span className="text-cyan-400">.dev</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-slate-300">
          <li>
            <a href="#home" className="hover:text-cyan-400">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400">
              Skills
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-cyan-400">
              Experience
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
