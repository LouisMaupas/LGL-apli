import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAppInstance } from "../../utils/firebase/Firebase";
import { useEffect } from "react";
import { useAuth } from "../../AuthProvider";
import { User } from "../../interfaces/interfaces";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import "./style.css";

/**
 * Renders a login page that allows users to sign in with their credentials. If the login is successful,
 * the user is redirected back to the page they tried to visit before they were redirected to the login page.
 *
 * @param {React.FormEvent<HTMLFormElement>} event - The form submit event.
 * @return {JSX.Element} The login page component.
 */
const LoginPage = () => {
  const auth = useAuth(),
    { t } = useTranslation(),
    navigate = useNavigate(),
    location = useLocation(),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [apiError, setApiError] = useState(""),
    [authInstance, setAuthInstance] = useState<Auth | undefined>();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    getAppInstance()
      .then((app) => {
        // Initialize Firebase Authentication and get a reference to the service
        const auth = getAuth(app);
        setAuthInstance(auth);
      })
      .catch((error) => {
        console.error("Failed to initialize Firebase app:", error);
      });
  }, []);

  /**
   * Handles the login form submission
   *
   * @param {React.FormEvent} event - The form submit event.
   */
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (authInstance) {
      signInWithEmailAndPassword(authInstance, email, password)
        .then((userCredential) => {
          console.log("userCredential = ", userCredential);
          // Adapt the Firebase user object to match with User type
          const user: User = {
            email: userCredential.user.email,
            displayName: userCredential.user.displayName, // This is where you might need to adjust depending on how the name is stored in Firebase
          };
          auth?.signin(user, () => {
            // Send them back to the page they tried to visit when they were
            // redirected to the login page.
            navigate(from, { replace: true });
          });
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            setApiError(`${t("login.form.error.wrongPassword")}`);
          } else if (error.code === "auth/invalid-email") {
            setApiError(`${t("login.form.error.invalidEmail")}`);
          } else {
            setApiError(`Erreur FIREBASE ${error.code} ${error.message}`);
          }
          console.error(`Erreur FIREBASE ${error.code} ${error.message}`);
        });
    } else {
      alert("Erreur lors de la récupération de l'instance de Firebase");
    }
  };

  return (
    <main className="login-page">
      <div>
        {from !== "/" ? (
          <div className="login-from-login-warning">{t("login.from.text")}</div>
        ) : null}
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            aria-describedby="my-helper-text"
            sx={{ color: "white" }}
          />
          <FormHelperText id="my-helper-text" color="success">
            {t("login.form.helper-email")}
          </FormHelperText>
        </FormControl>
        <br />
        <FormControl>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            aria-describedby="my-helper-text"
            sx={{ color: "white" }}
          />
        </FormControl>
        <br />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={(ev: React.FormEvent) => handleLogin(ev)}
        >
          {t("login.form.submit")}
        </Button>
        <p className="firebase-error">{apiError}</p>
        <Link to="/register">{t("login.form.signup")}</Link>
      </div>
    </main>
  );
};

export default LoginPage;
