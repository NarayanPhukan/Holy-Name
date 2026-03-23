import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';

function AdminLoginBtn() {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate('/adminLogin');
  };

  return (
    <div className="flex items-center">
      <button
        className="flex items-center px-4 py-2.5 bg-[#4C1A57] text-white rounded-lg hover:bg-[#3a1343] transition-colors shadow-md hover:shadow-lg font-medium text-sm"
        onClick={handleAdminLogin}
      >
        <FaUserShield className="mr-2" size={16} />
        Admin Login
      </button>
    </div>
  );
}

export default AdminLoginBtn;
