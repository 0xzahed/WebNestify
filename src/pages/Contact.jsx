import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import contactImage from '../assets/contact-image.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    subject: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative py-20 overflow-hidden"
        style={{
          background: 'linear-gradient(to right, #51b6d8, #212c71)'
        }}
      >
        {/* Network Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="contact-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
            <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="30%" y1="40%" x2="50%" y2="30%" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="50%" y1="30%" x2="70%" y2="50%" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="70%" y1="50%" x2="90%" y2="40%" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          </svg>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="flex items-center justify-center">
              <img 
                src={contactImage} 
                alt="Contact Us" 
                className="w-full max-w-lg animate-float"
              />
            </div>

            {/* Right - Content */}
            <div className="text-white text-center lg:text-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Get In Touch Now
              </h1>
              <p className="text-lg mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Your Queries</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email and Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                {/* Subject and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Your Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-6 py-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  required
                ></textarea>

                {/* Terms and Conditions */}
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="terms" className="w-4 h-4" required />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    <span className="text-orange-500">Privacy Policy</span> Accept{' '}
                    <span className="text-orange-500">Terms & Conditions</span> And
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-gray-200 rounded-lg overflow-hidden h-100 lg:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976383964465!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Send Mail */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Mail className="w-5 h-5 text-orange-500" />
                <h3 className="text-gray-900 font-semibold">Send Mail</h3>
              </div>
              <a href="mailto:hello@webnestify.com" className="text-orange-500 font-semibold text-lg">
                hello@webnestify.com
              </a>
            </div>

            {/* Call Us Now */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Phone className="w-5 h-5 text-orange-500" />
                <h3 className="text-gray-900 font-semibold">Call Us Now</h3>
              </div>
              <a href="tel:5789-45789-(44+)" className="text-orange-500 font-semibold text-lg">
                5789 - 45789 - (44+)
              </a>
            </div>

            {/* Contact Us */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                <h3 className="text-gray-900 font-semibold">Contact Us</h3>
              </div>
              <p className="text-orange-500 font-semibold text-lg">
                Blvd, The Bronx, USA 6890
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
