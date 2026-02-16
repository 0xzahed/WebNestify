import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FindDomain = () => {
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
    <section 
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to right, #1a9db5, #1e3a8a)'
      }}
    >
      {/* Network Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='5' cy='5' r='2'/%3E%3Ccircle cx='30' cy='5' r='2'/%3E%3Ccircle cx='55' cy='5' r='2'/%3E%3Ccircle cx='5' cy='30' r='2'/%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='55' cy='30' r='2'/%3E%3Ccircle cx='5' cy='55' r='2'/%3E%3Ccircle cx='30' cy='55' r='2'/%3E%3Ccircle cx='55' cy='55' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Find Domain Name</h2>
          <p className="text-white text-base max-w-2xl mx-auto opacity-90 leading-relaxed">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dayamv eirmod tempor invidunt
            ut labore and dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </div>

        {/* Domain Prices */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10 text-white">
          {domainPrices.map((domain, index) => (
            <div key={index} className="flex items-center gap-1">
              <span className="text-orange-500 font-bold text-lg">{domain.price}</span>
              <span className="text-white">{domain.extension}</span>
              {index < domainPrices.length - 1 && (
                <span className="ml-4 text-white opacity-50">|</span>
              )}
            </div>
          ))}
        </div>

        {/* Search Box */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="flex flex-wrap md:flex-nowrap items-center gap-3 p-4 rounded-full"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            {/* Search Button */}
            <button 
              onClick={handleSearch}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap"
            >
              Search
            </button>

            {/* Domain Extension Selector */}
            <div className="relative">
              <select 
                value={selectedExtension}
                onChange={(e) => setSelectedExtension(e.target.value)}
                className="appearance-none bg-white text-gray-800 px-6 py-3 pr-10 rounded-full font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {domainPrices.map((domain) => (
                  <option key={domain.extension} value={domain.extension}>
                    {domain.extension}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
            </div>

            {/* Search Input */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter Company Name"
              className="flex-1 bg-white text-gray-800 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 min-w-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindDomain;
