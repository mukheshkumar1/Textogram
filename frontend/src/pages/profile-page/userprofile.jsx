import { useParams, useNavigate } from "react-router-dom";
import { IoPlaySkipBackOutline } from 'react-icons/io5'; 
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../Context/AuthContext';

const ProfilePicturePage = () => {
  const { profilePicUrl } = useParams();
  const navigate = useNavigate();
  const { authUser } = useAuthContext();
  const [profilePic, setProfilePic] = useState('');

  useEffect(() => {
    const loadProfilePic = async () => {
      if (authUser && authUser.profilePic) {
        // Handle case where profilePic is a blob URL
        if (authUser.profilePic.startsWith('blob:')) {
          setProfilePic(authUser.profilePic);
        } else {
          // Handle case where profilePic is a regular URL
          setProfilePic(decodeURIComponent(authUser.profilePic));
        }
      } else if (profilePicUrl) {
        // Handle case where profilePicUrl is a blob URL
        if (profilePicUrl.startsWith('blob:')) {
          setProfilePic(decodeURIComponent(profilePicUrl));
        } else {
          // Handle case where profilePicUrl is a regular URL
          setProfilePic(decodeURIComponent(profilePicUrl));
        }
      }
    };

    loadProfilePic();
  }, [authUser, profilePicUrl]);

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen p-4">
      <img 
        src={profilePic} 
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
