import mlacUI from '../assets/mlac-ui.png';
import mlacDropdown from '../assets/mlac-dropdown.png';
import lexragLanding from '../assets/lexrag-landing.png';
import lexragResponse1 from '../assets/lexrag-response1.png';
import lexragResponse2 from '../assets/lexrag-response2.png';
import lexragGovernance from '../assets/lexrag-governance.png';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "AI Legal Advisory Chatbot (MLAC)",
      organization: "MSc Dissertation Project — Robert Gordon University",
      description: "Designed and built a multilingual legal advisory chatbot providing guidance on UK criminal law across three jurisdictions (England & Wales, Scotland, and Northern Ireland) in both English and French. Implemented a full RAG pipeline using LangChain, OpenAI GPT-4, and Pinecone vector store. Legal documents were extracted, chunked, translated via DeepL, and indexed with jurisdiction and language metadata for precise retrieval.",
      impact: "Demonstrates end-to-end AI system design — from document ingestion and vector indexing to multilingual response generation — built as a proof of concept for democratising access to legal information.",
      tech: ["Python", "Streamlit", "GPT-4", "LangChain", "Pinecone", "RAG", "DeepL", "OpenAI Embeddings"],
      images: [mlacUI, mlacDropdown],
      imageCaptions: ["Login interface", "Chat interface with language and jurisdiction selector"],
      links: {
        github: "https://github.com/Debo-Odufuwa/MLACprime"
      }
    },
    {
      id: 2,
      title: "LexRAG - Governed RAG Knowledge Base",
      organization: "Personal Portfolio Project - April 2026",
      description: "Built a governed retrieval-augmented generation (RAG) chatbot over UK legislation. LexRAG ingests the Housing (Scotland) Act 2025 via the legislation.gov.uk XML API, parses it into 175 section-level records, embeds them into a local vector store, and answers plain English questions with citations back to the source document. Unlike generic RAG demos, LexRAG applies production-grade data governance standards - every source is registered, every pipeline run is logged, every field is catalogued, and AI-generated content is visually separated from verbatim legislative text.",
      impact: "Demonstrates governed data product design - combining a working RAG pipeline with a full audit trail, source register, data catalogue, and AI content flagging framework aligned to a production governance standard. Directly prototypes a guidance pipeline for a live social care application.",
      tech: ["Python", "ChromaDB", "Streamlit", "OpenAI GPT-4o-mini", "HuggingFace", "RAG", "lxml", "legislation.gov.uk XML API"],
      images: [lexragLanding, lexragResponse1, lexragResponse2, lexragGovernance],
      imageCaptions: [
        "GOV.UK style landing page with capability tags and limitations notice",
        "AI-generated interpretation with section citations",
        "Verbatim source text reproduced directly from the legislation",
        "Governance boundary - system declines to answer outside its knowledge base"
      ],
      links: {
        github: "https://github.com/Debo-Odufuwa/lexrag"
      }
    },
    {
      id: 3,
      title: "Power BI Analytics Dashboard",
      organization: "Personal Project - Coming Soon",
      description: "Interactive business intelligence dashboard with advanced DAX measures, data modeling, and dynamic filtering.",
      impact: "Demonstrating end-to-end BI development skills",
      tech: ["Power BI", "DAX", "Data Modeling", "Power Query"],
      images: [],
      imageCaptions: [],
      links: {}
    },
    {
      id: 4,
      title: "SQL + Python Data Analysis",
      organization: "Personal Project - Coming Soon",
      description: "Complete data analysis workflow combining SQL queries with Python-based visualization and insights.",
      impact: "Showcasing database and analytical programming skills",
      tech: ["SQL", "Python", "Pandas", "Matplotlib"],
      images: [],
      imageCaptions: [],
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
            <h2 className="text-2xl font-bold text-primary mb-2">{project.title}</h2>
            <p className="text-accent font-medium">{project.organization}</p>
          </div>
        </div>

        <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

        <div className="bg-blue-50 border-l-4 border-accent p-4 mb-6">
          <p className="font-semibold text-primary text-sm mb-1">Impact:</p>
          <p className="text-gray-800">{project.impact}</p>
        </div>

        {project.images && project.images.length > 0 && (
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-600 mb-3">Screenshots:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((img, index) => (
                <div key={index} className="rounded-lg overflow-hidden border border-gray-200">
                  <img src={img} alt={project.imageCaptions[index]} className="w-full object-cover" />
                  <p className="text-xs text-gray-500 text-center py-2 bg-gray-50">
                    {project.imageCaptions[index]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-600 mb-2">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-blue-600 font-medium">
              View Code →
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-blue-600 font-medium">
              Live Demo →
            </a>
          )}
          {project.links.dashboard && (
            <a href={project.links.dashboard} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-blue-600 font-medium">
              View Dashboard →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default Projects;