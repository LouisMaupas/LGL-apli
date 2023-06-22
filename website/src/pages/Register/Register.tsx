import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Button, TextField, Container, Typography } from "@mui/material";

const Register = () => {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [pseudo, setPseudo] = useState(""),
    [message, setMessage] = useState(""),
    emailRegex = /^\S+@\S+\.\S+$/,
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
      setMessage("Veuillez entrer une adresse e-mail valide.");
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
              `ERREUR WHEN UPDATE DISPLAYNAME ${error} ${error.message}`
            );
          });
        setMessage(`Votre compte a bien été créé.`);
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
        Inscription
      </Typography>
      <form onSubmit={handleRegister}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="pseudo"
          label="Pseudo"
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
          label="Adresse email"
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
          name="password"
          label="Mot de passe"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {message && <p>{message}</p>}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={!isValidEmail(email)}
        >
          S'inscrire
        </Button>
      </form>
    </Container>
  );
};

export default Register;
