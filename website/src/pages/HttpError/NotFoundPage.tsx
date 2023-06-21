import { useNavigate } from "react-router-dom";

const NotFoundPage = (): JSX.Element => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Redirects the user to the previous page
  };

  return (
    <div className="layout">
      <h1>404 - Page non trouvée</h1>
      <p>La page demandée n'existe pas.</p>
      <button onClick={handleGoBack}>Retour</button>
    </div>
  );
};

export default NotFoundPage;
