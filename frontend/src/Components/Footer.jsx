import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaWhatsappSquare, FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { SiteDataContext } from "../context/SiteDataContext";

const Footer = () => {
  const { socialLinks, schoolProfile } = useContext(SiteDataContext);

  const linkClass = "text-slate-500 text-sm font-medium tracking-wide hover:text-primary transition-colors";
  const socialBtnClass = "w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white hover:scale-110 transition-all cursor-pointer border border-slate-100";

  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200">
      <div className="flex flex-col md:flex-row justify-between items-start px-4 md:px-6 py-6 w-full max-w-7xl mx-auto gap-6 lg:gap-8">
        
        {/* Brand Column */}
        <div className="flex flex-col items-start gap-3 w-full md:w-auto max-w-xs">
          <div className="flex items-center gap-3">
            <img
              src={schoolProfile?.logo || null}
              alt="School Logo"
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl shadow-sm object-cover"
            />
            <div className="font-serif font-bold text-primary text-xl leading-tight">
              {schoolProfile?.name || "School"}
            </div>
          </div>
          <p className="text-slate-400 text-xs tracking-wider text-left leading-relaxed mt-1">
            {schoolProfile?.punchLine}
          </p>
          <div className="flex flex-col gap-1.5 mt-2 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary/60 shrink-0" />
              {schoolProfile?.officeAddress}
            </span>
            <span className="flex items-center gap-2">
              <FaPhoneAlt className="text-primary/60 shrink-0" />
              {schoolProfile?.phone && `+91 ${schoolProfile.phone}`}
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope className="text-primary/60 shrink-0" />
              {schoolProfile?.email}
            </span>
          </div>
        </div>

        {/* Links Wrapper */}
        <div className="flex flex-row justify-start w-full md:w-auto gap-12 sm:gap-20">
          {/* Quick Links Column */}
          <div className="flex flex-col items-start gap-1.5">
            <h5 className="font-bold text-xs text-primary uppercase tracking-widest mb-1">Quick Links</h5>
            <Link to="/about" className={linkClass}>About Us</Link>
            <Link to="/admission" className={linkClass}>Admission</Link>
            <Link to="/courses" className={linkClass}>Courses</Link>
            <Link to="/notice" className={linkClass}>Notice Board</Link>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col items-start gap-1.5">
            <h5 className="font-bold text-xs text-primary uppercase tracking-widest mb-1">Resources</h5>
            <Link to="/faculty" className={linkClass}>Faculty</Link>
            <Link to="/gallery" className={linkClass}>Gallery</Link>
            <Link to="/career" className={linkClass}>Career</Link>
            <Link to="/complaints" className={linkClass}>Suggestions</Link>
            <Link to="/contact" className={linkClass}>Contact</Link>
          </div>
        </div>

        {/* Affiliation & Social Wrapper */}
        <div className="flex flex-row justify-start w-full md:w-auto gap-8 sm:gap-16">
          {/* Affiliation Column */}
          <div className="flex flex-col items-start gap-1.5">
            <h5 className="font-bold text-xs text-primary uppercase tracking-widest mb-1">Affiliation</h5>
            <p className="text-slate-500 text-sm">SEBA & ASHEC</p>
            <p className="text-slate-500 text-sm">Diocese of Dibrugarh</p>
            {schoolProfile?.officeHours && <p className="text-slate-400 text-[11px] mt-1">Office: {schoolProfile.officeHours}</p>}
          </div>
          
          {/* Social Column */}
          <div className="flex flex-col items-start gap-1.5">
            <h5 className="font-bold text-xs text-primary uppercase tracking-widest mb-1">Connect</h5>
            <div className="flex flex-wrap gap-2.5 mt-0.5 max-w-[140px]">
              {socialLinks?.whatsappChannel && (
                <a href={socialLinks.whatsappChannel} title="WhatsApp Channel" target="_blank" rel="noopener noreferrer" className={socialBtnClass}>
                  <FaWhatsappSquare size={18} />
                </a>
              )}
              {socialLinks?.whatsapp && (
                <a href={socialLinks.whatsapp} title="WhatsApp" target="_blank" rel="noopener noreferrer" className={socialBtnClass}>
                  <FaWhatsapp size={18} />
                </a>
              )}
              {socialLinks?.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className={socialBtnClass}>
                  <FaFacebook size={18} />
                </a>
              )}
              {socialLinks?.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className={socialBtnClass}>
                  <FaInstagram size={18} />
                </a>
              )}
              {socialLinks?.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className={socialBtnClass}>
                  <FaTwitter size={18} />
                </a>
              )}
              {socialLinks?.youtube && (
                <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className={socialBtnClass}>
                  <FaYoutube size={18} />
                </a>
              )}
              {socialLinks?.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={socialBtnClass}>
                  <FaLinkedin size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full py-3 text-center text-[10px] text-slate-400 font-medium tracking-widest uppercase border-t border-slate-100 flex flex-col md:flex-row justify-center items-center gap-1.5 md:gap-4 bg-white/50">
        <span>&copy; {new Date().getFullYear()} {schoolProfile?.name || "School"}, Sivasagar. All Rights Reserved.</span>
        <span>
          Developed by{" "}
          <a className="text-primary hover:underline" href="https://www.LenchoSolutions.com" target="_blank" rel="noopener noreferrer">
            Lencho Solutions
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
