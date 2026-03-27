import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'text-accent font-semibold' : 'text-gray-700 hover:text-accent';
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            Adebowale Odufuwa
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`${isActive('/')} transition-colors`}>
              Home
            </Link>
            <Link to="/projects" className={`${isActive('/projects')} transition-colors`}>
              Projects
            </Link>
            <Link to="/about" className={`${isActive('/about')} transition-colors`}>
              About
            </Link>
            <Link to="/contact" className={`${isActive('/contact')} transition-colors`}>
              Contact
            </Link>
          </div>

          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;