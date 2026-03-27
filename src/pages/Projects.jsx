function Projects() {
  const projects = [
    {
      id: 1,
      title: "AI Legal Advisory Chatbot (MLAC)",
      organization: "MSc Dissertation Project",
      description: "Built AI chatbot providing legal guidance across 3 UK jurisdictions in English and French. Implemented RAG architecture with OpenAI GPT-4 and Pinecone.",
      impact: "Proof of concept for democratizing access to legal information",
      tech: ["Python", "Streamlit", "GPT-4", "Pinecone", "LangChain", "RAG"],
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      id: 2,
      title: "Power BI Analytics Dashboard",
      organization: "Personal Project - Coming Soon",
      description: "Interactive business intelligence dashboard with advanced DAX measures, data modeling, and dynamic filtering.",
      impact: "Demonstrating end-to-end BI development skills",
      tech: ["Power BI", "DAX", "Data Modeling", "Power Query"],
      links: {}
    },
    {
      id: 3,
      title: "SQL + Python Data Analysis",
      organization: "Personal Project - Coming Soon",
      description: "Complete data analysis workflow combining SQL queries with Python-based visualization and insights.",
      impact: "Showcasing database and analytical programming skills",
      tech: ["SQL", "Python", "Pandas", "Matplotlib"],
      links: {}
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Projects</h1>
        <p className="text-xl text-gray-600">
          A growing collection of data analytics, AI, and automation projects. New projects added regularly.
        </p>
      </div>

      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectDetail key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectDetail({ project }) {
  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">
              {project.title}
            </h2>
            <p className="text-accent font-medium">{project.organization}</p>
          </div>
        </div>

        <p className="text-gray-700 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="bg-blue-50 border-l-4 border-accent p-4 mb-6">
          <p className="font-semibold text-primary text-sm mb-1">Impact:</p>
          <p className="text-gray-800">{project.impact}</p>
        </div>

        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-600 mb-2">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span 
                key={tech}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.links.github && (
            <a 
              href={project.links.github}
              className="text-accent hover:text-blue-600 font-medium flex items-center gap-1"
            >
              <span>View Code →</span>
            </a>
          )}
          {project.links.demo && (
            <a 
              href={project.links.demo}
              className="text-accent hover:text-blue-600 font-medium flex items-center gap-1"
            >
              <span>Live Demo →</span>
            </a>
          )}
          {project.links.dashboard && (
            <a 
              href={project.links.dashboard}
              className="text-accent hover:text-blue-600 font-medium flex items-center gap-1"
            >
              <span>View Dashboard →</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default Projects;