// Sets up routing and layout for the application + handles authentication

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import Download from "./pages/Download/Download";
import Profil from "./pages/Profil/Profil";
import Cards from "./pages/Cards/Cards";
import { AuthProvider, useAuth } from "./AuthProvider";
import PrivacyAndTerms from "./pages/PrivacyAndTerms/PrivacyAndTerms";
import NotFoundPage from "./pages/HttpError/NotFoundPage";
import HowToPlay from "./pages/HowToPlay/HowToPlay";
import Register from "./pages/Register/Register";

/**
 * Renders the App component that wraps the entire application with the React Router and provides routing to child components.
 *
 * @return {JSX.Element} The component that renders the entire application.
 */
const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/download" element={<Download />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/how-to-play" element={<HowToPlay />} />
              <Route path="/register" element={<Register />} />
              <Route path="/privacy-and-terms" element={<PrivacyAndTerms />} />
              <Route
                path="/profil"
                element={
                  <RequireAuth>
                    <Profil />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </>
  );
};

/**
 * Render the given children if the user is authenticated, otherwise redirect
 * them to the login page and save the current location.
 *
 * @param {Object} props - The props object
 * @param {JSX.Element} props.children - The children to render if authenticated
 * @return {JSX.Element} The rendered children or a redirect to the login page
 * with the current location saved.
 */
const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth(),
    location = useLocation();

  if (!auth?.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, rather than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

/**
 * // FIXME remove or apply
 * Renders a component based on the authentication status.
 * It's act as a middleware between the public and protected pages
 *
 * @return {JSX.Element} A paragraph element with a welcome message and a signout button if the user is logged in,
 * or a paragraph element with a message indicating that the user is not logged in.
 */
// const AuthStatus = () => {
//   const auth = useAuth(),
//     navigate = useNavigate();

//   if (!auth?.user) {
//     return (
//       <>
//         <Link to="/login">Se connecter</Link>
//       </>
//     );
//   }

//   return (
//     <p>
//       Welcome {auth.user}!{" "}
//       <button
//         onClick={() => {
//           auth.signout(() => navigate("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   );
// };

/**
 * Renders ALL the layout of the application which includes the authentication status,
 * links to public and protected pages, and the content of the current route.
 * Outlet is used to render the children components.
 *
 * @return {JSX.Element} The rendered layout component.
 */
const Layout = (): JSX.Element => {
  return (
    <div className="layout">
      {/* <AuthStatus /> */}
      {/* <ul>
        <li>
          <Link to="/">Aller à l'accueil</Link>
        </li>
        <li>
          <Link to="/profil">Aller à la page perso</Link>
        </li>
      </ul>*/}
      <Outlet />
    </div>
  );
};

export default App;
