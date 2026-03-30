import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { FaUserCircle, FaLock, FaEnvelope, FaExclamationCircle } from "react-icons/fa";
import { SiteDataContext } from "../context/SiteDataContext";

function AdminLogin() {
  const { schoolProfile } = useContext(SiteDataContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!username || !password) {
      setError("Please fill in both fields");
      setLoading(false);
      return;
    }

    const apiBase = import.meta.env.VITE_API_URL || '/api';
    axios.post(`${apiBase}/auth/login`, { email: username, password })
      .then((res) => {
        if (res.data.token && res.data._id) {
          // The backend returns user properties directly on res.data, not inside 'admin'
          const adminInfo = {
            _id: res.data._id,
            name: res.data.name,
            email: res.data.email,
            role: res.data.role
          };
          const adminDataStr = JSON.stringify(adminInfo);
          
          if (adminDataStr && adminDataStr !== "undefined") {
            localStorage.setItem('adminToken', res.data.token);
            localStorage.setItem('adminData', adminDataStr);
            setToken(res.data.token);
          } else {
            throw new Error('Server returned invalid user data object');
          }
        } else {
          throw new Error('Invalid server response: Missing required session fields');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response?.data?.message || 'Login failed. Please try again.');
        setLoading(false);
      });
  };

  useEffect(() => {
    const existingToken = localStorage.getItem('adminToken');
    if (existingToken || token) {
      console.log("Session active, redirecting...");
      navigate('/admin');
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center font-sans relative overflow-hidden">
      {/* Full-screen Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/Pictures/picturesoftheweb/school building.JPG" 
          alt="" 
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.88) 0%, rgba(30,41,59,0.82) 50%, rgba(15,23,42,0.90) 100%)' }} />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>
      
      <div className="relative z-10 w-full max-w-md px-6">
        
        {/* Logo/Header Area */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-2xl shadow-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.9) 0%, rgba(37,99,235,0.95) 100%)' }}>
            <FaUserCircle className="text-4xl text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>Admin Portal</h1>
          <p className="text-blue-200/80 font-medium text-sm tracking-wide">{schoolProfile?.name || "School"}</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-10 border border-white/30">
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Sign In</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {error && (
              <div className="p-3.5 bg-red-50 border border-red-200 text-red-600 rounded-xl flex items-start text-sm font-medium">
                <FaExclamationCircle className="mt-0.5 mr-2 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1" htmlFor="username">
                Username or Email
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-300 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all text-gray-800"
                  id="username"
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="admin@holynameschool.edu"
                />
              </div>
            </div>

            <div className="relative">
              <div className="flex justify-between items-center mb-2 ml-1">
                <label className="block text-sm font-semibold text-gray-700" htmlFor="password">
                  Password
                </label>
                <a href="#" className="text-xs font-semibold text-blue-500 hover:text-blue-700 transition-colors">
                  Forgot Password?
                </a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaLock className="text-gray-300 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all text-gray-800"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              className="w-full text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center transform hover:-translate-y-0.5 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)' }}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Authenticating...
                </span>
              ) : (
                "Sign In to Dashboard"
              )}
            </button>
          </form>

          <div className="mt-6 text-center pt-5 border-t border-gray-100">
            <p className="text-gray-500 text-sm">
              New administrator?{" "}
              <Link to="/signup" className="text-blue-600 font-bold hover:text-blue-800 transition-colors">
                Request Access
              </Link>
            </p>
          </div>
        </div>
        
        {/* Footer info */}
        <p className="text-center text-white/40 text-xs mt-8">
          &copy; {new Date().getFullYear()} {schoolProfile?.name || "School"}. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
