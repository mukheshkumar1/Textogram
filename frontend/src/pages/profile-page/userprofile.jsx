import { useParams, useNavigate } from "react-router-dom";
import { IoPlaySkipBackOutline } from 'react-icons/io5'; 

const ProfilePicturePage = () => {
  const { profilePicUrl } = useParams();
  const navigate = useNavigate(); 

  const handleBackToHome = () => {
    navigate("/"); 
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen p-4">
      <img 
        src={profilePicUrl} 
        alt="Profile" 
        className="w-auto h-auto max-w-full max-h-full mb-4" 
      />
      <IoPlaySkipBackOutline 
        onClick={handleBackToHome} 
        className="text-2xl cursor-pointer w-10 h-10"
      />
    </div>
  );
};

export default ProfilePicturePage;
