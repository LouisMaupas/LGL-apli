import { useAuth } from "../../AuthProvider";

const Profil = () => {
  const auth = useAuth();
  return (
    <>
      <p>Hello {auth?.user?.displayName}</p>
      <p>
        Pour l'instant j'ai un peu la flemme 🥱 mais bientot tu pourra modifier
        ton profil ici 👇.
      </p>
    </>
  );
};

export default Profil;
