function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Get In Touch</h1>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
        <p className="text-lg text-gray-700 mb-8">
          I'm always interested in hearing about new opportunities, collaborations, or just having a chat about data and AI.
          Feel free to reach out through any of the channels below.
        </p>

        <div className="space-y-6">
          <ContactMethod
            icon="📧"
            label="Email"
            value="debo.odufuwa@gmail.com"
            link="mailto:debo.odufuwa@gmail.com"
          />
          <ContactMethod
            icon="💼"
            label="LinkedIn"
            value="linkedin.com/in/adebowale-odufuwa"
            link="https://linkedin.com/in/adebowale-odufuwa"
          />
          <ContactMethod
            icon="💻"
            label="GitHub"
            value="github.com/Debo-Odufuwa"
            link="https://github.com/Debo-Odufuwa"
          />
          <ContactMethod
            icon="📍"
            label="Location"
            value="Aberdeen, Scotland, UK"
          />
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-accent">
        <h2 className="text-xl font-bold text-primary mb-4">Looking for specific expertise?</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• Data Analytics & Business Intelligence</li>
          <li>• AI/ML Solutions & Chatbot Development</li>
          <li>• Digital Transformation Strategy</li>
          <li>• Power BI & Tableau Dashboard Development</li>
          <li>• Process Automation & Optimization</li>
        </ul>
      </div>
    </div>
  );
}

function ContactMethod({ icon, label, value, link }) {
  const content = (
    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <span className="text-3xl">{icon}</span>
      <div>
        <p className="font-semibold text-primary">{label}</p>
        <p className="text-gray-700">{value}</p>
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
}

export default Contact;