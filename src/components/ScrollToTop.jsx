import { useState, useEffect } from 'react';
import { CloudUpload } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 w-12 h-12 bg-orange-500 hover:bg-black rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
          aria-label="Scroll to top"
        >
          <CloudUpload className="w-6 h-6 text-white" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
