import React from "react";

function Contact() {
  return (
    <div>
      <div className="h-auto p-4 bg-gray-100 flex items-center justify-center">
        <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Contact Us
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Address
            </h3>
            <p className="text-gray-600">
              Holy Name Senior Secondary School
              <br />
              Cherekapar, Nazira Ali Rd, Hatimuria
              <br />
              Dist: Sivasagar, Assam - 785697
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Phone Number
            </h3>
            <p className="text-gray-600">
              <a href="tel:6901055733" className="text-blue-600 hover:underline">6901055733</a>
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Office Hours
            </h3>
            <p className="text-gray-600">
              Monday - Saturday: 9:00 AM - 1:30 PM
              <br />
              Sunday: Closed
            </p>
          </div>

          <div className="text-center">
            <a
              href="mailto:holynameschool@gmail.com"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 inline-block"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
