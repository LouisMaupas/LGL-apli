import { Link } from "react-router-dom";
import { useAuth } from "../../AuthProvider";
import "./header.css";
import logo from "../../assets/logo.png";

/**
 * Renders the Header component
 *
 * @return {JSX.Element} The rendered Header component
 */
const Header = (): JSX.Element => {
  const auth = useAuth();
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
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
