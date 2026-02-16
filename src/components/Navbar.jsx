import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="text-white" style={{ background: 'linear-gradient(to right, #51b6d8, #212c71)' }}>
      {/* Main Navbar */}
      <div className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left - Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">W</span>
            </div>
            <span className="text-2xl font-bold">Webnestify</span>
          </Link>

          {/* Center - Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              to="/" 
              className={`${location.pathname === '/' ? 'text-orange-500' : 'text-white'} hover:text-orange-400 transition`}
            >
              Home
            </Link>
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition">
              <span>Pages</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition">
              <span>Hosting</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition">
              <span>Domain</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition">
              <span>Blog</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <Link 
              to="/contact" 
              className={`${location.pathname === '/contact' ? 'text-orange-500' : 'text-white'} hover:text-orange-400 transition`}
            >
              Contact
            </Link>
          </div>

          {/* Right Section - Language & Book Now */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 cursor-pointer">
              <span>🌐 English</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3">
            <Link to="/" className="block text-orange-500 hover:text-orange-400 transition">Home</Link>
            <Link to="/pages" className="block hover:text-orange-500 transition">Pages</Link>
            <Link to="/hosting" className="block hover:text-orange-500 transition">Hosting</Link>
            <Link to="/domain" className="block hover:text-orange-500 transition">Domain</Link>
            <Link to="/blog" className="block hover:text-orange-500 transition">Blog</Link>
            <Link to="/contact" className="block hover:text-orange-500 transition">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
