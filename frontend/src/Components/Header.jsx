import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AdminLoginBtn from "./AdminLoginBtn.jsx";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  // Helper for NavLink
  const navLinkClass = ({ isActive }) =>
    `block px-3 py-2 ${
      isActive
        ? "text-[#500088] border-b-2 border-[#735c00] pb-1 font-bold"
        : "text-slate-600 dark:text-slate-400 font-medium hover:text-[#500088] hover:bg-purple-50"
    } rounded-lg transition-all text-sm whitespace-nowrap`;

  // Helper for Sub NavLink
  const subNavLinkClass = ({ isActive }) =>
    `hover:text-primary transition-colors flex items-center gap-1 ${isActive ? "text-primary" : ""}`;

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="w-full bg-primary-container text-on-primary py-2 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-semibold tracking-widest uppercase">
          <div className="flex items-center gap-6">
            <a
              className="flex items-center gap-2 hover:text-secondary-container transition-colors duration-300"
              href="tel:6901055733"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              <span className="hidden sm:inline">6901055733</span>
            </a>
            <div className="hidden md:flex items-center gap-2 opacity-80">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              Sivasagar, Assam
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* The Admin Login button previously wrapped in a link */}
            <AdminLoginBtn />
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="bg-[#fcf8ff] dark:bg-slate-950/80 backdrop-blur-xl border-b border-primary/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full px-4 md:px-6 py-4">
          {/* Branding */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <img
              src="/src/Pictures/Logo.jpg"
              className="w-12 h-12 md:w-14 md:h-14 rounded-xl shadow-lg border border-primary/20 group-hover:scale-105 transition-transform duration-300 object-cover"
              alt="Holy Name School Logo"
            />
            <div className="flex flex-col">
              <h1 className="font-['Noto_Serif'] font-black text-[#500088] dark:text-purple-300 tracking-tighter text-sm sm:text-lg md:text-xl leading-tight">
                Holy Name Senior Secondary School
              </h1>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-bold text-secondary">
                Excellence in Education
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/principal" className={navLinkClass}>Principal</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/courses" className={navLinkClass}>Courses</NavLink>
            <NavLink to="/admission" className={navLinkClass}>Admission</NavLink>
            <NavLink to="/notice" className={navLinkClass}>Notice</NavLink>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden p-2 text-primary focus:outline-none"
            onClick={() => setShowMediaIcons(!showMediaIcons)}
          >
            <GiHamburgerMenu size={28} />
          </button>
        </div>

        {/* Sub-navigation Cluster (Desktop Contextual) */}
        <div className="hidden xl:block w-full border-t border-purple-50 bg-white/50">
          <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center gap-8 text-[11px] font-bold tracking-widest uppercase text-slate-500 overflow-hidden">
            <NavLink to="/faculty" className={subNavLinkClass}>
              <span className="material-symbols-outlined text-sm">group</span> Faculty
            </NavLink>
            <NavLink to="/gallery" className={subNavLinkClass}>
              <span className="material-symbols-outlined text-sm">gallery_thumbnail</span> Gallery
            </NavLink>
            <NavLink to="/career" className={subNavLinkClass}>
              <span className="material-symbols-outlined text-sm">work</span> Career
            </NavLink>
            <NavLink to="/complaints" className={subNavLinkClass}>
              <span className="material-symbols-outlined text-sm">lightbulb</span> Suggestions
            </NavLink>
            <NavLink to="/contact" className={subNavLinkClass}>
              <span className="material-symbols-outlined text-sm">contact_support</span> Contact
            </NavLink>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`xl:hidden flex flex-col bg-white overflow-hidden transition-all duration-300 ease-in-out ${
            showMediaIcons ? "max-h-[500px] border-t border-purple-50 shadow-lg" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col font-medium py-2">
            <li><NavLink to="/" className={navLinkClass} onClick={() => setShowMediaIcons(false)}>Home</NavLink></li>
            <li><NavLink to="/principal" className={navLinkClass} onClick={() => setShowMediaIcons(false)}>Principal</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass} onClick={() => setShowMediaIcons(false)}>About</NavLink></li>
            <li><NavLink to="/courses" className={navLinkClass} onClick={() => setShowMediaIcons(false)}>Courses</NavLink></li>
            <li><NavLink to="/admission" className={navLinkClass} onClick={() => setShowMediaIcons(false)}>Admission</NavLink></li>
            <li><NavLink to="/notice" className={navLinkClass} onClick={() => setShowMediaIcons(false)}>Notice</NavLink></li>
            <div className="border-t border-gray-100 my-1 mx-3"></div>
            <li><NavLink to="/faculty" className={navLinkClass} onClick={() => setShowMediaIcons(false)}>Faculty</NavLink></li>
            <li><NavLink to="/gallery" className={navLinkClass} onClick={() => setShowMediaIcons(false)}>Gallery</NavLink></li>
            <li><NavLink to="/career" className={navLinkClass} onClick={() => setShowMediaIcons(false)}>Career</NavLink></li>
            <li><NavLink to="/complaints" className={navLinkClass} onClick={() => setShowMediaIcons(false)}>Suggestions</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass} onClick={() => setShowMediaIcons(false)}>Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
