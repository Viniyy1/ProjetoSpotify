// src/components/ProfileIcon.jsx
import { Link } from "react-router-dom";

const ProfileIcon = ({ user }) => {
  const profilePic =
    user?.photo ||
    "https://i.pinimg.com/736x/55/6e/2e/556e2edc7518c0e5cb4d59aef6729b24.jpg";

  return (
    <Link to={user ? "/profile" : "/login"}>
      <img
        src={profilePic}
        alt="Perfil"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          cursor: "pointer",
        }}
      />
    </Link>
  );
};

export default ProfileIcon;
