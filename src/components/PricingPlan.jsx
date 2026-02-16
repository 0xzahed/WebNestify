import { Check, X } from 'lucide-react';
import priceBg from '../assets/price-bg.png';
import priceShape from '../assets/price-shape.png';

const PricingPlan = () => {
  const plans = [
    {
      name: "Basic Package",
      subtitle: "Complete Hosting For Your Website",
      price: "$19",
      period: ".99/Month",
      features: [
        { name: "Free SSL", included: true },
        { name: "Website 1", included: true },
        { name: "10GB SSD Storage", included: true },
        { name: "Free Email Address", included: true },
        { name: "Unlimited Bandwidth", included: false },
        { name: "2x Performance and Speed", included: false },
        { name: "Hack & Malware Protection", included: false },
        { name: "DDoS Protection", included: false }
      ]
    },
    {
      name: "Professional Package",
      subtitle: "Complete Hosting For Your Website",
      price: "$29",
      period: ".99/Month",
      features: [
        { name: "Free SSL", included: true },
        { name: "Website 1", included: true },
        { name: "10GB SSD Storage", included: true },
        { name: "Free Email Address", included: true },
        { name: "Unlimited Bandwidth", included: true },
        { name: "2x Performance and Speed", included: false },
        { name: "Hack & Malware Protection", included: false },
        { name: "DDoS Protection", included: false }
      ]
    },
    {
      name: "Business Package",
      subtitle: "Complete Hosting For Your Website",
      price: "$39",
      period: ".99/Month",
      features: [
        { name: "Free SSL", included: true },
        { name: "Website 1", included: true },
        { name: "10GB SSD Storage", included: true },
        { name: "Free Email Address", included: true },
        { name: "Unlimited Bandwidth", included: true },
        { name: "2x Performance and Speed", included: true },
        { name: "Hack & Malware Protection", included: true },
        { name: "DDoS Protection", included: true }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <style>{`
        .pricing-card-header {
          border-top: 2px solid #212C71;
          border-left: 2px solid #212C71;
          border-right: 2px solid #212C71;
        }
        .pricing-card:hover .pricing-card-header {
          border-top: 2px solid #FF6900;
          border-left: 2px solid #FF6900;
          border-right: 2px solid #FF6900;
        }
        .pricing-card:hover .price-shape-img {
          filter: brightness(0) saturate(100%) invert(45%) sepia(100%) saturate(2000%) hue-rotate(10deg) brightness(100%);
        }
        .pricing-card:hover .price-badge-img {
          filter: brightness(0) saturate(100%) invert(45%) sepia(100%) saturate(2000%) hue-rotate(10deg) brightness(100%);
        }
      `}</style>
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="bg-white overflow-hidden relative group cursor-pointer transition-all duration-700 pricing-card"
              style={{
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                borderRadius: '50px'
              }}
            >
              {/* Package Title */}
              <div 
                className="text-center relative transition-all duration-700 pricing-card-header"
                style={{
                  paddingTop: '30px',
                  paddingBottom: '45px',
                  borderRadius: '50px 50px 0 0',
                  transition: 'all 0.7s'
                }}
              >
                <h3 className="text-xl font-bold text-gray-900 transition-colors duration-700">{plan.name}</h3>
                <p className="text-sm text-gray-600 mt-1 transition-colors duration-700">{plan.subtitle}</p>
                
                {/* Wavy Border Bottom */}
                <img 
                  src={priceShape} 
                  alt="" 
                  className="absolute bottom-0 left-0 w-full transition-all duration-700 price-shape-img"
                  style={{ transform: 'translateY(50%)' }}
                />
              </div>

              {/* Price Badge */}
              <div className="flex justify-center mb-6" style={{ marginTop: '10px' }}>
                <div className="relative w-52 h-36">
                  <img 
                    src={priceBg} 
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain transition-all duration-700 price-badge-img"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="mb-1">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className="text-base align-super">{plan.period.split('/')[0]}</span>
                      </div>
                      <div className="text-sm">
                        /{plan.period.split('/')[1]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="px-8 pb-8 relative">
                {/* Background Image - pseudo-element effect */}
                <div 
                  className="absolute w-full h-full"
                  style={{
                    content: '""',
                    position: 'absolute',
                    zIndex: -1,
                    top: '20px',
                    left: 0,
                    right: 0,
                    width: '100%',
                    height: '120%',
                    backgroundImage: `url(${priceBg})`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    transition: '0.7s'
                  }}
                />
                
                <ul className="space-y-3 mb-8 relative">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-between text-sm text-gray-700">
                      <span>{feature.name}</span>
                      {feature.included ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <X className="w-4 h-4 text-red-500" />
                      )}
                    </li>
                  ))}
                </ul>

                {/* Get it Now Button */}
                <div className="text-center relative">
                  <button className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-full font-semibold group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    Get it Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
