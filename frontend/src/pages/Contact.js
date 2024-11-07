import React from 'react';

export default function Contact() {
  const emailAddress = "info@tarangelectronics.com"; // Email address

  const handleEmailClick = () => {
    // Opens the default email client
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="bg-blue-50 text-gray-900 min-h-screen p-6 md:p-10">
      <section className="flex flex-col items-center text-center space-y-10">
        {/* Contact Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-700 to-blue-900 px-10 py-3 rounded-lg shadow-lg">
          Contact Us
        </h2>

        {/* Contact Info Section */}
        <div className="space-y-6 text-gray-700 max-w-2xl">
          <p className="text-lg">
            Have questions or need help with your electronics? We’d love to hear from you! You can reach us directly via email or phone.
          </p>
          <p className="text-lg">
            You can also reach us via email at{' '}
            <span 
              onClick={handleEmailClick} 
              className="text-blue-600 font-semibold hover:underline cursor-pointer">
              {emailAddress}
            </span>{' '}
            or call us at{' '}
            <span className="font-semibold">+91-9876543210</span>.
          </p>
          <p className="text-lg">
            Visit us at our store:
            <span className="block font-semibold">Tarang Electronics, Bagodar, Jharkhand, India</span>
          </p>
        </div>

        {/* Removed the contact form as requested */}
        
      </section>

      {/* Additional Contact Information */}
      <section className="mt-12 flex flex-col items-center space-y-4 text-gray-700">
        <h3 className="text-2xl font-bold text-blue-800">Our Commitment</h3>
        <p className="max-w-2xl text-center">
          At Tarang Electronics, we value every customer. Whether you have a question about our products or need support with a recent purchase, our team is here to help. Your satisfaction is our top priority.
        </p>
      </section>
    </div>
  );
}
