import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAppInstance } from "../../utils/firebase/Firebase";
import { useEffect } from "react";
import { useAuth } from "../../AuthProvider";
import { User } from "../../AuthProvider";

/**
 * Renders a login page that allows users to sign in with their credentials. If the login is successful,
 * the user is redirected back to the page they tried to visit before they were redirected to the login page.
 *
 * @param {React.FormEvent<HTMLFormElement>} event - The form submit event.
 * @return {JSX.Element} The login page component.
 */
const LoginPage = () => {
  const auth = useAuth(),
    navigate = useNavigate(),
    location = useLocation(),
    [apiError, setApiError] = useState("");
  let authInstance: Auth,
    from = location.state?.from?.pathname || "/";

  useEffect(() => {
    getAppInstance()
      .then((app) => {
        // Initialize Firebase Authentication and get a reference to the service
        authInstance = getAuth(app);
      })
      .catch((error) => {
        console.error("Failed to initialize Firebase app:", error);
      });
  }, []);

  /**
   * Handles the login form submission
   *
   * @param {React.FormEvent<HTMLFormElement>} event - The form submit event.
   */
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, password } = event.currentTarget;
    signInWithEmailAndPassword(authInstance, username.value, password.value)
      .then((userCredential) => {
        console.log("uesrCredential", userCredential);
        // Adapt the Firebase user object to match with User type
        const user: User = {
          email: userCredential.user.email,
          displayName: userCredential.user.displayName, // This is where you might need to adjust depending on how the name is stored in Firebase
          // TODO add others necessary fields
        };
        auth?.signin(user, () => {
          // Send them back to the page they tried to visit when they were
          // redirected to the login page.
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        setApiError(
          `Erreur lors de la connexion ${error.code} ${error.message}`
        );
      });
  };

  return (
    <div>
      {from !== "/" ? (
        <div>Vous devez vous connectez pour accèder à la page {from}</div>
      ) : null}

      <form onSubmit={handleLogin}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <label>
          Mot de passe: <input name="password" type="password" />
        </label>
        <button type="submit">Login</button>
      </form>

      <p>{apiError}</p>
    </div>
  );
};

export default LoginPage;
