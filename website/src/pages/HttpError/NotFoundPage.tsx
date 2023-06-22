import { useNavigate } from "react-router-dom";
import backgroundNotFound from "../../assets/background_page_not_found.jpg";
import "./not_found.css";

const NotFoundPage = (): JSX.Element => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Redirects the user to the previous page
  };

  return (
    <div
      className="content"
      style={{ backgroundImage: `url(${backgroundNotFound})` }}
    >
      <div className="page-not-found">
        <h1>404 - Page non trouvée</h1>
        <p>La page demandée n'existe pas.</p>
        <button onClick={handleGoBack}>Retour</button>
      </div>
    </div>
  );
};

export default NotFoundPage;
