export default function Skills() {
  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "Angular 16+",
    "TypeScript",
    "JavaScript",
    "MySQL",
    "MongoDB",
    "RxJS",
    "Docker",
    "JWT",
    "CI/CD",
    "Tailwind CSS",
  ];

  return (
    <section id="skills" className="px-6 md:px-20 py-16 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-5 py-3 bg-slate-900 border border-slate-700 rounded-2xl"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
