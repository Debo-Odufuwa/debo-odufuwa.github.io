import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Data & AI Professional
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            I design data-driven solutions and AI-powered tools that improve decision making, automate processes, and deliver measurable business impact.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            With a background spanning analytics, leadership, and digital transformation, I bring hands-on expertise in{' '}
            <span className="text-accent font-semibold">Python</span>,{' '}
            <span className="text-accent font-semibold">SQL</span>,{' '}
            <span className="text-accent font-semibold">Power BI</span>, and{' '}
            <span className="text-accent font-semibold">machine learning</span>, combined with strong business understanding and stakeholder collaboration.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Recent work includes AI chatbots, analytics pipelines, and automation tools across charity and digital environments.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/projects"
              className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              View Projects
            </Link>
            <a 
              href="/cv.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors"
            >
              View CV
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-primary mb-8">Featured Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="Coming Soon: Power BI Dashboard"
            description="Interactive analytics dashboard showcasing data modeling, DAX measures, and business insights."
            tags={['Power BI', 'DAX', 'Data Modeling']}
          />
          <ProjectCard
            title="AI Legal Chatbot"
            description="RAG-based chatbot providing legal guidance across UK jurisdictions using GPT-4 and Pinecone."
            tags={['Python', 'RAG', 'GPT-4', 'LangChain']}
          />
        </div>
        <div className="text-center mt-8">
          <Link to="/projects" className="text-accent font-semibold hover:underline">
            View all projects →
          </Link>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ title, description, tags }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="bg-blue-50 text-accent px-3 py-1 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Home;