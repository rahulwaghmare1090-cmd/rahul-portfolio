export default function About() {
  return (
    <section id="about" className="px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">About Me</h2>

        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
          <p className="text-slate-400 leading-8 text-lg">
            Experienced Senior Frontend Developer / Full Stack Developer with
            strong expertise in
            <span className="text-cyan-400 font-semibold">
              {" "}
              React.js, Node.js, Angular, Express.js, Mysql, MongoDB, RxJS, JWT
              Authentication, CI/CD, Docker
            </span>
            . Focused on reusable components, scalable architecture, and
            performance optimization.
          </p>
        </div>
      </div>
    </section>
  );
}
