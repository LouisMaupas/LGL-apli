import { Link } from "react-router-dom";
import "./footer.css";

/**
 * Renders the Footer component
 *
 * @return {JSX.Element} The rendered Footer component
 */
const Footer = (): JSX.Element => {
  return (
    <footer>
      <Link to="/privacy-and-terms">
        Politique de confidentialité et conditions d'utilisation.
      </Link>
      <br />© 2023 LGL Games, inc. Tous droits réservés.
    </footer>
  );
};

export default Footer;
