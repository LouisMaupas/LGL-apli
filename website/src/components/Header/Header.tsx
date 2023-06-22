import { Link } from "react-router-dom";
import { useAuth } from "../../AuthProvider";
import "./header.css";
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";

/**
 * Renders the Header component
 *
 * @return {JSX.Element} The rendered Header component
 */
const Header = (): JSX.Element => {
  const auth = useAuth();
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img className="logo" src={logo} alt="Home" />
            </Link>
          </li>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to={"/cards"}>Bibliothèque</Link>
          </li>
          <li>
            <Link to="/how-to-play">Comment jouer</Link>
          </li>
          <li>
            <Link to="/download">Téléchargement</Link>
          </li>
          <li>
            <Link to="/profil">Profil</Link>
          </li>
          {auth?.user ? (
            <li>
              <button
                onClick={() => {
                  auth?.signout(() => {});
                }}
              >
                Se deconnecter
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Se connecter</Link>
              </li>
              <li>
                <Link to="/register">S'inscrire</Link>
              </li>
              <li>
                <button onClick={() => changeLanguage("en")}>
                  🌍 I speak English
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
