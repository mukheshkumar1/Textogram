import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

const ProfileButton = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile'); // Navigate to the profile page
  };

  return (
    <div>
      <CgProfile onClick={handleProfileClick} className="cursor-pointer w-10 h-10 rounded-full" /> 
    </div>
  );
};

export default ProfileButton;
