export default function Experience() {
  const experiences = [
    {
      company: "Oracle",
      role: "Senior Application Engineer",
      duration: "Dec 2023 - April 2026",
      tech: "React, Node.js, Express.js, React Query, MySQL",
      achievements: [
        "Reduced dashboard load time by 77%",
        "Optimized rendering for 30,000+ records",
        "Built reusable UI component libraries",
        "Implemented WCAG accessibility standards",
      ],
    },

    {
      company: "Accenture",
      role: "Senior Software Engineer",
      duration: "Nov 2021 - Dec 2023",
      tech: "Angular 15, TypeScript, PrimeNG, REST APIs",
      achievements: [
        "Built 25+ reusable Angular components",
        "Reduced duplicate code by 50%",
        "Implemented lazy loading",
        "Mentored frontend developers",
      ],
    },

    {
      company: "Wipro",
      role: "Senior Software Engineer",
      duration: "Nov 2020 - Nov 2021",
      tech: "Angular 14, Node.js, PostgreSQL",
      achievements: [
        "Developed trading platform UI",
        "Maintained 80%+ unit test coverage",
        "Built reusable frontend architecture",
        "Handled large-scale API integration",
      ],
    },

    {
      company: "SP Software",
      role: "Software Engineer",
      duration: "Nov 2018 - Sep 2020",
      tech: "Angular, RxJS, PrimeNG",
      achievements: [
        "Built BI dashboards",
        "Improved application performance",
        "Implemented RxJS reactive flows",
      ],
    },

    {
      company: "Locuz Enterprise Solutions",
      role: "Software Engineer",
      duration: "Aug 2016 - Oct 2018",
      tech: "Angular 8, TypeScript",
      achievements: [
        "Developed cloud-based UI",
        "Participated in SDLC lifecycle",
        "Worked on deployment activities",
      ],
    },
  ];

  return (
    <section id="experience" className="px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{exp.company}</h3>

                  <p className="text-cyan-400 text-lg">{exp.role}</p>
                </div>

                <span className="text-slate-400 mt-3 md:mt-0">
                  {exp.duration}
                </span>
              </div>

              <p className="text-slate-300 mb-6">{exp.tech}</p>

              <ul className="space-y-2">
                {exp.achievements.map((item, idx) => (
                  <li key={idx} className="text-slate-400 flex gap-2">
                    <span className="text-cyan-400">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
