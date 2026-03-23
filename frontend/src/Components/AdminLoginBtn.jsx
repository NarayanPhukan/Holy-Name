import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLogin } from 'react-icons/ai';

function AdminLoginBtn() {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate('/adminLogin');
  };

  return (
    <div className="flex items-center">
      <button
        className="flex items-center px-4 py-4 bg-orange-600 text-white rounded-lg hover:bg-blue-800 transition duration-200"
        onClick={handleAdminLogin}
      >
        <AiOutlineLogin className="mr-2" size={20} />
        Admin Login
      </button>
    </div>
  );
}

export default AdminLoginBtn;
