import { Calendar } from 'lucide-react';

const BlogSection = () => {
  const blogs = [
    {
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      category: "VPN Hosting",
      date: "17 October, 2024",
      title: "Domain Privacy Protection 2024",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dayam nonumy eirmod tempor invidunt ut labore and dolore magna aliquyam erat."
    },
    {
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
      category: "Shared Hosting",
      date: "October 11, 2024",
      title: "6 Tips on Ideal Domain Name",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dayam nonumy eirmod tempor invidunt ut labore and dolore magna aliquyam erat."
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      category: "Cloud Hosting",
      date: "October 10, 2024",
      title: "Most Popular Domains in 2024",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dayam nonumy eirmod tempor invidunt ut labore and dolore magna aliquyam erat."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dayam nonumy eirmod tempor invidunt ut labore.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Blog Image with Category Badge */}
              <div className="relative">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  {blog.category}
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {blog.description}
                </p>

                {/* Read More Link */}
                <a 
                  href="#"
                  className="inline-block text-gray-900 font-semibold hover:text-orange-500 transition-colors duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
