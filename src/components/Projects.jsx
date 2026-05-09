export default function Projects() {
  const projects = [
    {
      title: "Oracle Enterprise Command Center (ECC)",
      company: "Oracle",
      tech: "React, Node.js, Express.js, React Query, MySQL, OJET",
      description:
        "Built scalable enterprise analytics dashboards with performance optimization, virtualization for 30,000+ records, reusable component libraries, and WCAG-compliant accessibility.",
      achievements: [
        "Reduced dashboard load time by 77%",
        "Optimized rendering for 30,000+ records",
        "Reduced storage footprint by 80%",
        "Built custom Node.js SDK",
      ],
    },

    {
      title: "Integrated Workplace Management System (IWMS)",
      company: "Accenture",
      tech: "Angular 15, TypeScript, PrimeNG, REST APIs",
      description:
        "Led frontend architecture for enterprise workplace management platform with modular design, reusable components, lazy loading, and scalable UI architecture.",
      achievements: [
        "Built 25+ reusable Angular components",
        "Reduced duplicate code by 50%",
        "Implemented lazy loading",
        "Mentored frontend developers",
      ],
    },

    {
      title: "NSE Parivartan Trading Platform",
      company: "Wipro",
      tech: "Angular 14, Node.js, Express.js, PostgreSQL",
      description:
        "Developed high-performance trading UI for real-time workflows and data-heavy screens with scalable frontend architecture and optimized API integrations.",
      achievements: [
        "Improved responsiveness for trading screens",
        "Maintained 80%+ unit test coverage",
        "Implemented reusable architecture",
        "Handled large-scale API integrations",
      ],
    },

    {
      title: "FTA Data View",
      company: "SP Software",
      tech: "Angular, PrimeNG, RxJS",
      description:
        "Developed BI dashboards and implemented reactive RxJS data flows for enterprise reporting and analytics applications.",
      achievements: [
        "Improved application performance",
        "Resolved production issues",
        "Implemented RxJS reactive flows",
        "Enhanced dashboard usability",
      ],
    },

    {
      title: "Cloutor",
      company: "Locuz Enterprise Solutions",
      tech: "Angular 8, TypeScript, Angular Material",
      description:
        "Developed cloud-based web application UI and participated in the full SDLC lifecycle including development, testing, and deployment.",
      achievements: [
        "Developed scalable UI architecture",
        "Participated in SDLC lifecycle",
        "Maintained unit testing coverage",
        "Worked on deployment activities",
      ],
    },
  ];

  return (
    <section id="projects" className="px-6 md:px-20 py-16 bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
          Enterprise Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <span className="text-cyan-400 font-medium">
                  {project.company}
                </span>
              </div>

              <p className="text-cyan-300 mb-4">{project.tech}</p>

              <p className="text-slate-400 leading-7 mb-6">
                {project.description}
              </p>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-white">
                  Key Achievements
                </h4>

                <ul className="space-y-2">
                  {project.achievements.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-slate-400 flex items-start gap-2"
                    >
                      <span className="text-cyan-400">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
