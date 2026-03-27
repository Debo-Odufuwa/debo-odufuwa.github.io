import { useState } from 'react';
import headshot from '../assets/headshot.jpg';

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">About Me</h1>

      <div className="prose prose-lg max-w-none">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <img 
              src={headshot} 
              alt="Adebowale Odufuwa" 
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
            <div className="flex-1">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Data and AI professional with a strong foundation in analytics, automation, and digital transformation. With over 2 years of hands-on experience in data analytics and more than a decade of leadership across telecommunications, government, and nonprofit sectors, I bring a practical and business-focused approach to solving complex problems with data.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I specialize in building end-to-end data solutions, from data pipelines and dashboards to AI-powered applications. My work combines technical capability in Python, SQL, Power BI, and machine learning with a strong understanding of how organisations operate and make decisions.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I recently completed an <strong>MSc in Business Analytics with distinction</strong> from Robert Gordon University, where I focused on applied AI, including the development of a multilingual legal advisory chatbot using Retrieval Augmented Generation architecture.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I am particularly interested in roles where data, AI, and business strategy intersect to drive meaningful impact.
              </p>

              {/* Expandable Section */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  showMore ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="border-t border-gray-200 pt-6 mt-2">
                  <h3 className="text-xl font-bold text-primary mb-4">My Journey into Data and AI</h3>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    My journey into data and AI is built on a foundation of leadership and real-world business experience. Before transitioning into analytics, I spent over 15 years in senior roles across telecommunications and public sector environments, leading teams, driving revenue growth, and managing complex operations.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    During this time, I developed a strong appreciation for how decisions are made within organisations and the challenges leaders face when working with incomplete or fragmented data. This experience shaped my approach to analytics, focusing not just on technical solutions but on delivering insights that are practical, actionable, and aligned with business needs.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    My transition into data analytics was driven by a desire to move closer to data-driven decision making and digital transformation. Through postgraduate study and hands-on project work, I developed expertise in data analysis, machine learning, and AI systems. Since then, I have applied these skills in real environments, building analytics pipelines, automation tools, and AI-driven solutions that improve efficiency and support better outcomes.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    What differentiates my profile is the ability to bridge technical and non-technical worlds. I understand both how to build data solutions and how to ensure they deliver real value within an organisation.
                  </p>
                </div>
              </div>

              {/* View More/Less Button */}
              <button
                onClick={() => setShowMore(!showMore)}
                className="mt-4 text-accent font-semibold hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                {showMore ? (
                  <>
                    <span>Show Less</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>View More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <SkillCategory 
              title="Data & Analytics"
              skills={["Power BI (DAX, Modeling)", "Tableau", "Google Looker Studio", "SQL", "Advanced Excel", "Data Governance"]}
            />
            <SkillCategory 
              title="AI & Automation"
              skills={["Python (Pandas, Scikit-learn)", "RAG & LangChain", "OpenAI GPT-4", "Machine Learning", "GA4 & GTM"]}
            />
            <SkillCategory 
              title="Technical Development"
              skills={["React", "Electron", "FastAPI", "MongoDB", "BigQuery", "API Integration"]}
            />
            <SkillCategory 
              title="Business Strategy"
              skills={["Digital Transformation", "Process Optimization", "Stakeholder Engagement", "Change Management"]}
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Education</h2>
          
          <div className="space-y-4">
            <EducationItem
              degree="MSc Business Analytics (Distinction)"
              institution="Robert Gordon University, Aberdeen"
              year="2022 - 2024"
              details="Dissertation: Multilingual Legal Advisory Chatbot using RAG for UK Criminal Law"
            />
            <EducationItem
              degree="Masters in Managerial Psychology (MMP)"
              institution="University of Ibadan, Nigeria"
              year="2023"
            />
            <EducationItem
              degree="BSc (Hons) Mathematics"
              institution="Lagos State University, Nigeria"
              year="1991"
            />
          </div>
        </section>

        <div className="bg-accent text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">View My CV</h2>
          <p className="mb-6">Get the full details of my experience and qualifications</p>
          <a 
            href="/cv.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-accent px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View CV (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}

function SkillCategory({ title, skills }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="font-bold text-primary mb-3">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-gray-700 flex items-start">
            <span className="text-accent mr-2">•</span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EducationItem({ degree, institution, year, details }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="font-bold text-primary text-lg">{degree}</h3>
      <p className="text-accent font-medium">{institution}</p>
      <p className="text-gray-600 text-sm mb-2">{year}</p>
      {details && <p className="text-gray-700 italic">{details}</p>}
    </div>
  );
}

export default About;