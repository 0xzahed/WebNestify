import { Server, Users, FileText, Cloud, Settings, HardDrive } from 'lucide-react';
import { useState } from 'react';
import servicesIcon1 from '../assets/services-icon-bg1.png';
import servicesIcon2 from '../assets/services-icon-bg2.png';
import servicesIcon3 from '../assets/services-icon-bg3.png';
import servicesIconHover from '../assets/services-icon-hover.png';

const HostingSolutions = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const solutions = [
    {
      title: "Dedicated Hosting",
      icon: Server,
      bgImage: servicesIcon1
    },
    {
      title: "Shared Hosting",
      icon: Users,
      bgImage: servicesIcon2
    },
    {
      title: "WordPress Hosting",
      icon: FileText,
      bgImage: servicesIcon3
    },
    {
      title: "Cloud Hosting",
      icon: Cloud,
      bgImage: servicesIcon1
    },
    {
      title: "Managed Hosting",
      icon: Settings,
      bgImage: servicesIcon2
    },
    {
      title: "VPS Hosting",
      icon: HardDrive,
      bgImage: servicesIcon3
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">We Provide Hosting Solution</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eimod tempor 
            invidunt ut labore et dolore magna aliquam erat, sed diam voluptua
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 text-center transition-all duration-300"
                style={{
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.08)'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icon with Background Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32 flex items-center justify-center overflow-hidden">
                    {/* Background Image */}
                    <img 
                      src={hoveredIndex === index ? servicesIconHover : solution.bgImage} 
                      alt=""
                      className={`absolute inset-0 w-full h-full object-contain ${hoveredIndex === index ? 'animate-slide-down' : ''}`}
                      key={hoveredIndex === index ? 'hover' : 'normal'}
                    />
                    {/* Icon Overlay */}
                    <IconComponent className="relative z-10 w-10 h-10 text-gray-800 stroke-[1.5]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  Lorem Ipsum Dolor Sit Amet, Conse Tetur Sadip Scing Elitr, Sed Diam Temporno Numy Eirmod 
                  Tempor Invidunt
                </p>

                {/* Discover Link */}
                <button className="text-gray-900 font-semibold hover:text-orange-500 transition border-b-2 border-gray-900 hover:border-orange-500 pb-1">
                  Discover
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HostingSolutions;
