import React from 'react';

export default function Privacy() {
  return (
    <div className="bg-blue-50 text-gray-900 min-h-screen p-6 md:p-10">
      <section className="flex flex-col items-center text-center space-y-10">
        {/* Privacy Policy Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-700 to-blue-900 px-10 py-3 rounded-lg shadow-lg">
          Privacy Policy
        </h2>

        {/* Privacy Policy Content */}
        <div className="space-y-6 text-gray-700 max-w-2xl">
          <p className="text-lg">
            At Tarang Electronics, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or make a purchase.
          </p>

          <h3 className="text-2xl font-bold">Information We Collect</h3>
          <p className="text-lg">
            We may collect personal information that you provide directly to us, such as your name, email address, phone number, and mailing address when you fill out forms or make a purchase.
          </p>

          <h3 className="text-2xl font-bold">How We Use Your Information</h3>
          <p className="text-lg">
            The information we collect may be used in the following ways:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>To process your transactions and manage your orders.</li>
            <li>To communicate with you about your account or transactions.</li>
            <li>To improve our website and customer service.</li>
            <li>To send periodic emails regarding your order or other products and services.</li>
          </ul>

          <h3 className="text-2xl font-bold">Data Protection</h3>
          <p className="text-lg">
            We implement a variety of security measures to maintain the safety of your personal information. Your personal data is stored in secure networks and is only accessible by a limited number of persons who have special access rights.
          </p>

          <h3 className="text-2xl font-bold">Sharing Your Information</h3>
          <p className="text-lg">
            We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except to provide products or services you request.
          </p>

          <h3 className="text-2xl font-bold">Your Rights</h3>
          <p className="text-lg">
            You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us using the information below.
          </p>

          <h3 className="text-2xl font-bold">Contact Us</h3>
          <p className="text-lg">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-lg">
            <span className="font-semibold">Email:</span> info@tarangelectronics.com
          </p>
          <p className="text-lg">
            <span className="font-semibold">Phone:</span> +91-9876543210
          </p>
        </div>
      </section>
    </div>
  );
}
