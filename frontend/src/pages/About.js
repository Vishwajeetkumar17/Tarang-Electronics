import React from 'react';

export default function About() {
  return (
    <div className="bg-blue-50 text-gray-900 min-h-screen p-6 md:p-10">
      <section className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">

        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-3 rounded-lg shadow-lg">
          About Tarang Electronics
        </h2>

        {/* Image */}
        <img src="/pic1.jpg" alt="Tlogo" className="w-24 md:w-32 rounded-full shadow-lg" />

        {/* Owner Name */}
        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-wide uppercase">
          Pradeep Kumar
        </h3>

        {/* Social Media Links */}
        <div className="flex space-x-4 text-lg font-semibold">
          <a
            href="https://www.linkedin.com/uas/login-submit?_l=en_US"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full px-5 py-2"
          >
            <i className="fa fa-linkedin mr-2" aria-hidden="true"></i>LinkedIn
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full px-5 py-2"
          >
            <i className="fa fa-facebook mr-2" aria-hidden="true"></i>Facebook
          </a>
          <a
            href="mailto:kumarpradeep941136@gmail.com"
            className="bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full px-5 py-2"
          >
            <i className="fa fa-envelope mr-2" aria-hidden="true"></i>Email
          </a>
        </div>

        {/* About Us Content */}
        <div className="text-justify space-y-6">
          <h4 className="text-lg md:text-xl font-semibold text-blue-800">
            Introducing Pradeep Kumar, the esteemed owner of Tarang Electronics...
          </h4>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Tarang Electronics is your one-stop destination for all your electronic needs. From sales to service, we are committed to providing top-notch products and expert assistance to ensure your satisfaction.
            </p>

            {/* Section Titles */}
            <h5 className="text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-blue-800 px-10 py-3 rounded-lg shadow-lg text-center">
              Tarang Electronics: Your Trusted Electronics Destination
            </h5>

            <h5 className="text-lg font-semibold text-blue-800">Our Products:</h5>
            <p>
              At Tarang Electronics, we offer a diverse range of high-quality electronics sourced from leading brands worldwide. Whether you're searching for smartphones, laptops, tablets, cameras, audio systems, or accessories, we have an extensive selection.
            </p>

            <h5 className="text-lg font-semibold text-blue-800">Our Services:</h5>
            <p>
              In addition to our comprehensive product offerings, Tarang Electronics takes pride in providing exceptional repair and maintenance services. Our team of skilled technicians is ready to diagnose and resolve a wide range of electronic issues promptly.
            </p>

            <h5 className="text-lg font-semibold text-blue-800">Customer Satisfaction:</h5>
            <p>
              At Tarang Electronics, customer satisfaction is our utmost priority. We understand that each customer has unique needs, and we strive to exceed expectations at every turn with expert advice and friendly service.
            </p>

            <h5 className="text-lg font-semibold text-blue-800">Visit Tarang Electronics Today:</h5>
            <p>
              Whether you're in need of a new gadget, seeking expert repair services, or simply want to explore the latest trends in electronics, visit Tarang Electronics for a personalized and satisfying experience.
            </p>
          </div>

          {/* Achievements Section */}
          <h5 className="text-lg font-semibold text-blue-800">Our Achievements</h5>
          <p className="text-gray-700 leading-relaxed">
            Our commitment to quality and service has made us a trusted name in the community, with numerous satisfied customers who rely on us for their electronic needs.
          </p>
        </div>

        {/* Map Section */}
        <div className="map-container w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mt-8">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=Tarang+Electronic,+Bagodar,+Jharkhand,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
