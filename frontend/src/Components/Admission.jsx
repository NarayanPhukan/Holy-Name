import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { FaLaptop, FaBuilding, FaClipboardList, FaGraduationCap, FaPhoneAlt, FaEnvelope, FaCheckCircle } from "react-icons/fa";

function Admission() {
  const steps = [
    { title: "Registration", desc: "Start by registering your ward's details online or at the school office." },
    { title: "Entrance Exam", desc: "A brief assessment to understand the student's current academic level." },
    { title: "Interview", desc: "A personal interaction with the student and parents." },
    { title: "Final Results", desc: "Selection is based on the assessment and interview performance." },
    { title: "Admission Confirmation", desc: "Submit the required documents and complete the fee payment." },
  ];

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    const form = e.target;
    const formData = new FormData();
    formData.append('studentName', form.querySelector('[placeholder="Enter full name"]')?.value || '');
    formData.append('dateOfBirth', form.querySelector('[type="date"]')?.value || '');
    formData.append('placeOfBirth', form.querySelector('[placeholder="Enter place of birth"]')?.value || '');
    formData.append('gender', form.querySelector('select[required]')?.value || '');
    formData.append('nationality', form.querySelector('[placeholder="Enter nationality"]')?.value || '');
    formData.append('religion', form.querySelector('[placeholder="Enter religion"]')?.value || '');
    formData.append('previousSchool', form.querySelector('[placeholder="School name (if any)"]')?.value || '');
    formData.append('gradeApplied', form.querySelectorAll('select[required]')[1]?.value || '');
    formData.append('fatherName', form.querySelector('[placeholder="Enter father\'s name"]')?.value || '');
    formData.append('fatherOccupation', form.querySelector('[placeholder="Enter father\'s occupation"]')?.value || '');
    formData.append('motherName', form.querySelector('[placeholder="Enter mother\'s name"]')?.value || '');
    formData.append('motherOccupation', form.querySelector('[placeholder="Enter mother\'s occupation"]')?.value || '');
    formData.append('guardianName', form.querySelector('[placeholder="Enter guardian\'s name"]')?.value || '');
    formData.append('relationship', form.querySelector('[placeholder="e.g. Father, Mother"]')?.value || '');
    formData.append('contactNumber', form.querySelector('[type="tel"]')?.value || '');
    formData.append('email', form.querySelector('[type="email"]')?.value || '');
    formData.append('address', form.querySelector('textarea')?.value || '');

    // File uploads
    const fileInputs = form.querySelectorAll('[type="file"]');
    if (fileInputs[0]?.files[0]) formData.append('transferCertificate', fileInputs[0].files[0]);
    if (fileInputs[1]?.files[0]) formData.append('marksheet', fileInputs[1].files[0]);

    try {
      const apiBase = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '/api' : 'http://localhost:5000/api');
      await axios.post(`${apiBase}/admissions`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSubmitted(true);
      window.scrollTo({ top: document.getElementById('apply').offsetTop - 100, behavior: 'smooth' });
    } catch (err) {
      setSubmitError(err.response?.data?.message || 'Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans text-gray-800 pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center bg-gradient-to-r from-canva-cyan to-canva-purple overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">Admissions</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light">
            Join a community dedicated to educational excellence and holistic growth.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4C1A57]">Admission Process</h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-gray-600">A simple, transparent, and seamless five-step journey.</p>
          </div>

          {/* Stepper */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[calc(100%-20%)] h-[2px] bg-gray-200">
                     <div className="h-full bg-amber-500 w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                )}
                <div className="w-16 h-16 mx-auto bg-amber-50 relative z-10 rounded-full flex items-center justify-center border-4 border-white shadow-md text-amber-500 text-xl font-bold mb-4 transition-transform group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white">
                  {index + 1}
                </div>
                <h3 className="text-lg font-serif font-bold text-[#4C1A57] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Online Application */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:border-blue-200 transition-colors">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                 <FaLaptop />
              </div>
              <h2 className="text-2xl font-serif font-bold text-[#4C1A57]">Online Mode</h2>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Visit our official website and navigate to the Admission section.
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Create an account and fill out the online application form.
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Upload digital copies of required documents (Birth Certificate, TC, and Marksheets).
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Complete the secure online payment for the application fee.
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Receive instant confirmation and further instructions via email.
              </li>
            </ul>
          </div>

          {/* Offline Application */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:border-amber-200 transition-colors">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center text-2xl mr-4">
                 <FaBuilding />
              </div>
              <h2 className="text-2xl font-serif font-bold text-[#4C1A57]">Offline Mode</h2>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                Visit the school administrative block during working hours (9 AM - 3 PM).
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                Collect the admission application packet from the front desk.
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                Fill out the form manually in CAPITAL letters.
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                Attach photocopies of necessary documents.
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                Submit the completed docket and pay the fee at the cash counter.
              </li>
            </ul>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-gray-100" id="apply">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4C1A57]">Apply Now</h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-gray-600">Fill out the form below to initiate the admission process.</p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Student's Full Name *</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors" placeholder="Enter full name" required />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Date of Birth *</label>
                <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors" required />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Place of Birth</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors" placeholder="Enter place of birth" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Gender *</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors" required>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Blood Group</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors">
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nationality *</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors" placeholder="Enter nationality" required />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Religion</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors" placeholder="Enter religion" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Previous School Attended</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors" placeholder="School name (if any)" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Grade/Class Applied For *</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors" required>
                  <option value="">Select Grade</option>
                  <option value="nursery">Nursery</option>
                  <option value="lkg">LKG</option>
                  <option value="ukg">UKG</option>
                  <option value="class1">Class I</option>
                  <option value="class2">Class II</option>
                  <option value="class3">Class III</option>
                  <option value="class4">Class IV</option>
                  <option value="class5">Class V</option>
                  <option value="class6">Class VI</option>
                  <option value="class7">Class VII</option>
                  <option value="class8">Class VIII</option>
                  <option value="class9">Class IX</option>
                  <option value="class10">Class X</option>
                </select>
              </div>
            </div>

            <h3 className="text-xl font-serif font-bold text-[#4C1A57] mt-8 mb-4 border-b pb-2">Parent/Guardian Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Father's Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors" placeholder="Enter father's name" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Father's Occupation</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors" placeholder="Enter father's occupation" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Mother's Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors" placeholder="Enter mother's name" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Mother's Occupation</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors" placeholder="Enter mother's occupation" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Guardian's Full Name *</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors" placeholder="Enter guardian's name" required />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Relationship to Student *</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors" placeholder="e.g. Father, Mother" required />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Contact Number *</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors" placeholder="Enter phone number" required />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors" placeholder="Enter email address" required />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Residential Address *</label>
              <textarea className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors" rows="3" placeholder="Enter full address" required></textarea>
            </div>

            <h3 className="text-xl font-serif font-bold text-[#4C1A57] mt-8 mb-4 border-b pb-2">Documents to Upload</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Transfer Certificate (Previous School) *</label>
                <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="w-full px-4 py-[9px] rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors bg-white" required />
                <p className="text-xs text-gray-500 mt-1">PDF, JPG, or PNG (Max 5MB)</p>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Marksheet of Previous Class *</label>
                <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="w-full px-4 py-[9px] rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors bg-white" required />
                <p className="text-xs text-gray-500 mt-1">PDF, JPG, or PNG (Max 5MB)</p>
              </div>
            </div>

            <div className="text-center pt-6">
              <button type="submit" className="bg-[#4C1A57] text-white font-bold px-10 py-4 rounded-full hover:bg-opacity-90 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-lg">
                Submit Application
              </button>
            </div>
          </form>
          ) : (
            <div className="max-w-2xl mx-auto text-center py-10 animate-fade-in">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                <FaCheckCircle />
              </div>
              <h3 className="text-3xl font-serif font-bold text-[#4C1A57] mb-4">Application Submitted!</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Thank you for applying to Holy Name School. Your application has been successfully received. 
                Our admissions team will review your details and contact you via email regarding the next steps and entrance assessment schedule.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-[#4C1A57] font-bold hover:underline"
              >
                Submit another application
              </button>
            </div>
          )}
        </div>

        {/* Info & CTA */}
        <div className="bg-[#4C1A57] rounded-3xl shadow-2xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
          
          <div className="mb-8 md:mb-0 md:pr-12 relative z-10 w-full md:w-2/3">
            <h2 className="text-3xl font-serif font-bold mb-4">Ready to Apply?</h2>
            <p className="text-white/80 mb-6 text-lg">
              Begin your child's journey of academic excellence today. Access our Student Portal for all admission-related activities.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-white/90">
              <div className="flex items-center">
                <FaPhoneAlt className="text-amber-400 mr-3" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-amber-400 mr-3" />
                <span>admissions@school.com</span>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 w-full md:w-1/3 text-left md:text-right">
            <NavLink
              to="/studentportal"
              className="inline-flex items-center justify-center bg-amber-500 text-[#4C1A57] font-bold px-8 py-4 rounded-full hover:bg-amber-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full md:w-auto text-lg"
            >
              <FaGraduationCap className="mr-2 text-xl" />
              Student Portal
            </NavLink>
            <p className="text-sm text-white/60 mt-4 md:text-center block md:inline-block w-full text-center">
              Click here to apply online
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admission;
