import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import homeOneBg from '../assets/home-one-bg.jpg';
import homeImage from '../assets/home-image.png';

const Hero = () => {
  const [selectedExtension, setSelectedExtension] = useState('.com');
  const [searchQuery, setSearchQuery] = useState('');

  const domainPrices = [
    { extension: '.store', price: '$2.9' },
    { extension: '.info', price: '$6.9' },
    { extension: '.net', price: '$3.75' },
    { extension: '.to', price: '$3.5' },
    { extension: '.com', price: '$4.25' }
  ];

  const handleSearch = () => {
    console.log(`Searching for: ${searchQuery}${selectedExtension}`);
  };
  return (
    <section className="relative overflow-visible pb-40 md:pb-48 lg:pb-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center h-full bg-no-repeat"
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

      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-100 md:min-h-125 lg:min-h-150">
          {/* Left Side - Server Illustration */}
          <div className="hidden lg:flex items-center justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-lg">
              <img 
                src={homeImage} 
                alt="Server Hosting" 
                className="w-full h-auto animate-float"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-white space-y-4 md:space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div className="flex justify-start">
              <span className="text-gray-200 text-xs md:text-sm lg:text-base">Dedicated Hosting</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Get the Standard<br />
              Domain Offer
            </h1>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm md:text-base lg:text-lg">Free WordPress Installation</span>
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm md:text-base lg:text-lg">One Year Free Service</span>
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm md:text-base lg:text-lg">Unlimited Bandwidth</span>
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm md:text-base lg:text-lg">Support 24/7</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
              <button className="px-6 md:px-8 py-2.5 md:py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-900 transition font-medium text-sm md:text-base">
                Registration
              </button>
              <button className="px-6 md:px-8 py-2.5 md:py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition font-medium shadow-lg text-sm md:text-base">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Find Domain Section - Overlapping */}
      <div className="absolute bottom-0 left-0 right-0 z-20 transform translate-y-1/3 md:translate-y-1/2">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-6 lg:p-8 border-2 border-gray-100">
            <div className="text-center mb-4 md:mb-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Find Domain Name</h2>
              
              {/* Domain Prices */}
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 lg:gap-6 mb-4 md:mb-6 text-sm md:text-base">
                {domainPrices.map((domain, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <span className="text-orange-500 font-bold text-base md:text-lg">{domain.price}</span>
                    <span className="text-gray-700 text-sm md:text-base">{domain.extension}</span>
                    {index < domainPrices.length - 1 && (
                      <span className="ml-2 md:ml-4 text-gray-300 hidden sm:inline">|</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Search Box */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-3 bg-gray-50 p-2 md:p-3 lg:p-4 rounded-2xl md:rounded-3xl lg:rounded-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter Company Name"
                  className="flex-1 bg-white text-gray-800 px-4 md:px-6 py-2.5 md:py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 w-full md:w-auto border border-gray-200 text-sm md:text-base"
                />

                <div className="flex gap-2 md:gap-3">
                  <div className="relative flex-1 md:flex-none">
                    <select 
                      value={selectedExtension}
                      onChange={(e) => setSelectedExtension(e.target.value)}
                      className="appearance-none bg-white text-gray-800 px-3 md:px-4 lg:px-6 py-2.5 md:py-3 pr-8 md:pr-10 rounded-full font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 w-full border border-gray-200 text-sm md:text-base"
                    >
                      {domainPrices.map((domain) => (
                        <option key={domain.extension} value={domain.extension}>
                          {domain.extension}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-600 pointer-events-none" />
                  </div>

                  <button 
                    onClick={handleSearch}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 md:px-6 lg:px-8 py-2.5 md:py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap flex-1 md:flex-none shadow-lg text-sm md:text-base"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
