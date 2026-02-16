import { Server, Database, BarChart3, Headphones, Cloud, CloudUpload } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Server,
      title: "Secure Data Server",
      description: "Lorem ipsum dolor sit amet, conse tetur sadip scing elitr, sed diam diam temporno numy eirmod tempor invidunt."
    },
    {
      icon: Database,
      title: "Unlimited Database",
      description: "Lorem ipsum dolor sit amet, conse tetur sadip scing elitr, sed diam diam temporno numy eirmod tempor invidunt."
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Lorem ipsum dolor sit amet, conse tetur sadip scing elitr, sed diam diam temporno numy eirmod tempor invidunt."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, conse tetur sadip scing elitr, sed diam diam temporno numy eirmod tempor invidunt."
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Lorem ipsum dolor sit amet, conse tetur sadip scing elitr, sed diam diam temporno numy eirmod tempor invidunt."
    },
    {
      icon: CloudUpload,
      title: "Backup Data Limit",
      description: "Lorem ipsum dolor sit amet, conse tetur sadip scing elitr, sed diam diam temporno numy eirmod tempor invidunt."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dayamv eirmod tempor invidunt
            ut labore and dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 text-center transition-all duration-300 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <IconComponent className="w-16 h-16 text-gray-800 stroke-[1.5]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
