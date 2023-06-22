import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Button, TextField, Container, Typography } from "@mui/material";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const emailRegex = /^\S+@\S+\.\S+$/;

  const isValidEmail = (email: string) => emailRegex.test(email);

  const auth = getAuth();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setMessage("Veuillez entrer une adresse e-mail valide.");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setMessage(`Votre compte a bien été créé.`);
        console.log("usercre = ", userCredential);
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
