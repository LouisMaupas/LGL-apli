import { Link } from "react-router-dom";
import { useAuth } from "../../AuthProvider";
import "./header.css";
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

/**
 * Renders the Header component
 *
 * @return {JSX.Element} The rendered Header component
 */
const Header = (): JSX.Element => {
  const auth = useAuth();
  const { t, i18n } = useTranslation();

  /**
   * Changes the language based on the value provided in the event object.
   *
   * @param {React.ChangeEvent<{ value: unknown }>} event - The event object containing the value of the language to be changed to.
   */
  const changeLanguage = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value as string);
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
            <Link to="/">{t("Home")}</Link>
          </li>
          <li>
            <Link to={"/cards"}>{t("Library")}</Link>
          </li>
          <li>
            <Link to="/how-to-play">{t("How_to_play")}</Link>
          </li>
          <li>
            <Link to="/download">{t("Download")}</Link>
          </li>
          <li>
            <Link to="/profil">{t("Profil")}</Link>
          </li>
          {auth?.user ? (
            <li>
              <button
                onClick={() => {
                  auth?.signout();
                }}
              >
                {t("Logout")}
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">{t("Login")}</Link>
              </li>
              <li>
                <Link to="/register">{t("Register")}</Link>
              </li>
            </>
          )}
          <li>
            <Select
              value={i18n.language}
              onChange={changeLanguage}
              sx={{
                ".MuiOutlinedInput-notchedOutline": { borderStyle: "none" },
              }}
            >
              <MenuItem value={"en"}>🌍English</MenuItem>
              <MenuItem value={"fr"}>🌍Français</MenuItem>
            </Select>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
