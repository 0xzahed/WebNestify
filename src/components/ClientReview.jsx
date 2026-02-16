import { useState, useEffect } from 'react';

const ClientReview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const reviews = [
    {
      name: "Mario Ortega",
      position: "(CEO) Ocik Co Ltd.",
      review: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dayam nonumy eirmod tempor invidunt ut labore and dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Tom Henry",
      position: "(CEO) Ocik Co Ltd.",
      review: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dayam nonumy eirmod tempor invidunt ut labore and dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Stephanie Garza",
      position: "(Founder) Ocik Co Ltd.",
      review: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dayam nonumy eirmod tempor invidunt ut labore and dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      name: "Sarah Johnson",
      position: "(Manager) Tech Corp.",
      review: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dayam nonumy eirmod tempor invidunt ut labore and dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "David Miller",
      position: "(Director) Startup Inc.",
      review: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dayam nonumy eirmod tempor invidunt ut labore and dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
      image: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
      name: "Emily Davis",
      position: "(CTO) Digital Labs.",
      review: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dayam nonumy eirmod tempor invidunt ut labore and dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  const totalSlides = Math.ceil(reviews.length / 3);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client's Review</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dayamv eirmod tempor invidunt
            ut labore and dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="overflow-hidden max-w-6xl mx-auto mb-12 pt-12">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div 
                key={slideIndex}
                className="min-w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-2"
              >
                {reviews.slice(slideIndex * 3, slideIndex * 3 + 3).map((review, index) => {
                  const cardIndex = slideIndex * 3 + index;
                  return (
                    <div 
                      key={cardIndex}
                      className="bg-white rounded-3xl p-8 text-center relative pt-20 transition-all duration-300 cursor-pointer group"
                      style={{
                        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                        border: '2px solid #e5e7eb',
                        transform: hoveredCard === cardIndex ? 'translateY(-10px)' : 'translateY(0)'
                      }}
                      onMouseEnter={() => setHoveredCard(cardIndex)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Profile Image */}
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <img 
                            src={review.image} 
                            alt={review.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                        "{review.review}"
                      </p>

                      {/* Name */}
                      <h3 
                        className="text-lg font-bold mb-1 transition-colors duration-300"
                        style={{
                          color: hoveredCard === cardIndex ? '#f97316' : '#111827'
                        }}
                      >
                        {review.name}
                      </h3>

                      {/* Position */}
                      <p className="text-sm text-gray-500">{review.position}</p>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, dot) => (
            <button
              key={dot}
              onClick={() => setCurrentSlide(dot)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentSlide === dot ? 'bg-orange-500 w-6' : 'bg-gray-300 w-3'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
