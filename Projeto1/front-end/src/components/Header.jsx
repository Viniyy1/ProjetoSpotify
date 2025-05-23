import React from "react";
import logoSpotify from "../assets/logo/spotify-logo.png"; // ajuste o caminho conforme a estrutura do seu projeto
import { Link } from "react-router-dom";
import Weather from "./Weather";

const Header = ({ user }) => {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img src={logoSpotify} alt="Spotify logo" className="header__logo" />
        </Link>
        <Weather city="Belo Horizonte" />
      </div>

      <div className="header__right">
        <Link className="header__title" to="/">
          <h1>Spotify</h1>
        </Link>
        <div className="header__icon">
          <Link to={user ? "/profile" : "/login"}>
            <div className="profile-icon-wrapper">
              <img
                src={
                  user?.avatar ||
                  "https://i.pinimg.com/736x/55/6e/2e/556e2edc7518c0e5cb4d59aef6729b24.jpg"
                }
                width={40}
                height={40}
                alt="Perfil"
                className="profile-icon"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
