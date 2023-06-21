import { useAuth } from "../../AuthProvider";

const Profil = () => {
  const auth = useAuth();
  return (
    <>
      <h3>La page profil est Protected</h3>
      <p>
        Hello {auth?.user?.name} {auth?.user?.email}
      </p>
    </>
  );
};

export default Profil;
