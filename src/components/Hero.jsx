import homeOneBg from '../assets/home-one-bg.jpg';
import homeImage from '../assets/home-image.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homeOneBg})` }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(81, 182, 216, 0.7), rgba(33, 44, 113, 0.9))' }}></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 border border-blue-300 rounded-lg transform rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 border border-blue-300 rounded-lg transform -rotate-12"></div>
      </div>

      {/* Network Lines Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <line x1="30%" y1="40%" x2="50%" y2="30%" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <line x1="50%" y1="30%" x2="70%" y2="50%" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <line x1="70%" y1="50%" x2="90%" y2="40%" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-125 md:min-h-150">
          {/* Left Side - Server Illustration */}
          <div className="flex items-center justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-lg">
              <img 
                src={homeImage} 
                alt="Server Hosting" 
                className="w-full h-auto animate-float"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-white space-y-6 md:space-y-8 order-1 lg:order-2">
            {/* Top Right Label */}
            <div className="flex justify-start">
              <span className="text-gray-200 text-sm md:text-base">Dedicated Hosting</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Get the Standard<br />
              Domain Offer
            </h1>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg">Free WordPress Installation</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg">One Year Free Service</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg">Unlimited Bandwidth</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg">Support 24/7</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-900 transition font-medium">
                Registration
              </button>
              <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition font-medium shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
