import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./register.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Button, TextField, Container, Typography } from "@mui/material";

const Register = () => {
  const [email, setEmail] = useState(""),
    [confirmEmail, setConfirmEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmPassword, setConfirmPassword] = useState(""),
    [pseudo, setPseudo] = useState(""),
    [message, setMessage] = useState(""),
    { t } = useTranslation(),
    emailRegex = /^\S+@\S+\.\S+$/,
    passwordsMatch = password === confirmPassword,
    isValidEmail = (email: string) => emailRegex.test(email),
    auth = getAuth();

  /**
   * Handles user registration by creating a new user account and updating their pseudo.
   *
   * @param {React.FormEvent} e - the form event that triggers the registration process.
   * @return {void}.
   */
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setMessage(`${t("register.form.error")}`);
      return;
    }
    if (!passwordsMatch) {
      setMessage(`${t("register.form.error.passwordsDontMatch")}`);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, { displayName: pseudo })
          .then(() => {
            // ok
          })
          .catch((error) => {
            setMessage(
              `${t("register.form.error.displayName")}} ${error} ${
                error.message
              }`
            );
          });
        setMessage(`${t("register.form.success")}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(`ERREUR ${errorCode} ${errorMessage}`);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        {t("register.form.title")}
      </Typography>
      <form onSubmit={handleRegister}>
        <TextField
          className="test"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="pseudo"
          label={t("register.form.pseudo")}
          name="pseudo"
          autoFocus
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label={t("register.form.email")}
          name="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="confirmEmail"
          label={t("register.form.confirmEmail")}
          name="confirmEmail"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label={t("register.form.password")}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label={t("register.form.confirmPassword")}
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {message && <p>{message}</p>}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          disabled={!isValidEmail(email)}
        >
          {t("register.form.send")}
        </Button>
      </form>
    </Container>
  );
};

export default Register;
