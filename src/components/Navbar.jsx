import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 text-white z-60" style={{ background: 'linear-gradient(to right, #51b6d8, #212c71)' }}>
        {/* Main Navbar */}
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left - Logo */}
            <Link to="/" className="flex items-center gap-2 z-50">
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
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2 cursor-pointer">
                <span>🌐 English</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition">
                Book Now
              </button>
            </div>

            {/* Mobile Right Section */}
            <div className="lg:hidden flex items-center gap-3">
              <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium transition text-sm">
                Book Now
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                className="text-white z-60 relative"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed top-0 right-0 h-auto max-h-screen w-64 text-white shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0 z-50' : 'translate-x-full z-0'
        }`}
        style={{ background: 'rgba(33, 44, 113, 0.95)' }}
      >
        <div className="pt-20 px-6 pb-8">
          <nav className="space-y-2">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className={`block py-2 ${location.pathname === '/' ? 'text-orange-500' : 'text-white hover:text-orange-400'}`}
            >
              Home
            </Link>
            <Link 
              to="/pages" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-white hover:text-orange-400"
            >
              Pages
            </Link>
            <Link 
              to="/hosting" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-white hover:text-orange-400"
            >
              Hosting
            </Link>
            <Link 
              to="/domain" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-white hover:text-orange-400"
            >
              Domain
            </Link>
            <Link 
              to="/blog" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-white hover:text-orange-400"
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className={`block py-2 ${location.pathname === '/contact' ? 'text-orange-500' : 'text-white hover:text-orange-400'}`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
