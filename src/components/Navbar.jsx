import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 text-white z-60" style={{ background: 'linear-gradient(to right, #51b6d8, #212c71)' }}>
        {/* Main Navbar */}
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left - Logo */}
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-2 z-50 cursor-pointer">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">W</span>
              </div>
              <span className="text-2xl font-bold">Webnestify</span>
            </button>

            {/* Center - Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-orange-400 transition cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-white hover:text-orange-400 transition cursor-pointer"
              >
                Hosting
              </button>
              <button 
                onClick={() => scrollToSection('domain')}
                className="text-white hover:text-orange-400 transition cursor-pointer"
              >
                Domain
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-white hover:text-orange-400 transition cursor-pointer"
              >
                Blog
              </button>
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
            <button 
              onClick={() => { scrollToSection('home'); setIsOpen(false); }}
              className="block py-2 text-white hover:text-orange-400 cursor-pointer w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => { scrollToSection('pricing'); setIsOpen(false); }}
              className="block py-2 text-white hover:text-orange-400 cursor-pointer w-full text-left"
            >
              Hosting
            </button>
            <button 
              onClick={() => { scrollToSection('domain'); setIsOpen(false); }}
              className="block py-2 text-white hover:text-orange-400 cursor-pointer w-full text-left"
            >
              Domain
            </button>
            <button 
              onClick={() => { scrollToSection('blog'); setIsOpen(false); }}
              className="block py-2 text-white hover:text-orange-400 cursor-pointer w-full text-left"
            >
              Blog
            </button>
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
