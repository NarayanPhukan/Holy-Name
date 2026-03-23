import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white p-6 md:p-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div>
          <h5 className="font-bold mb-2">Curriculum</h5>
          <p>SEBA & ASHEC</p>
        </div>
        <div>
          <h5 className="font-bold mb-2">Board</h5>
          <p>Diocese of Dibrugarh</p>
          <a>
            <p>FWHC+Q69, Dibrugarh, Assam 786001</p>
          </a>
        </div>
        <div>
          <h5 className="font-bold mb-2">School Address</h5>
          <p>XMH8+GGW, Nazira Ali Rd, Hatimuria, Assam 785697</p>
          <p className="mt-2">Office Timing</p>
          <p>9am - 1:30pm (Monday - Saturday)</p>
        </div>
        <div>
          <h5 className="font-bold mb-2">Quick Links</h5>
          {/* Add links here */}
        </div>
        <div>
          <h5 className="font-bold mb-2">Developed by Lencho Solutions</h5>
          <p>
            Copyright @{" "}
            <a className="text-red-300" href="https://www.LenchoSolutions.com" target="_blank" rel="noopener noreferrer">
              Lencho Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
