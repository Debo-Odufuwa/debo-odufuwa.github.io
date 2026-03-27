function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            © 2025 Adebowale Odufuwa. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="https://linkedin.com/in/adebowale-odufuwa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/Debo-Odufuwa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a 
              href="mailto:debo.odufuwa@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;