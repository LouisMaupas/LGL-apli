import React, { createContext, useContext, useState } from "react";

interface User {
  email: string;
  name: string;
  [key: string]: any;
}

interface AuthContextType {
  user: any;
  signin: (user: User, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

// Create the context for user authentication
const AuthContext = createContext<AuthContextType>(null!);

/**
 * Hook that returns the authentication context.
 *
 * @return {AuthContext} The authentication context.
 */
const useAuth = (): AuthContextType | null => {
  const auth = useContext(AuthContext);
  return auth;
};

/**
 * Provider that gives the authentication context to its children.
 *
 * @param {React.FC} children - the child components to be wrapped with the authentication context.
 * @return {React.ReactNode} the wrapped child components with the authentication context.
 */
const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  /**
   * Updates the user data when he connects.
   *
   * @param {any} userData - the new user data to be set
   * @param {VoidFunction} callback - the function to be executed after setting user data
   */
  const signin = (userData: any, callback: VoidFunction) => {
    setUser(userData);
    callback();
  };

  /**
   * Signs out the current user.
   *
   * @param {VoidFunction} callback - Callback function to be invoked after user is signed out.
   */
  const signout = (callback: VoidFunction) => {
    setUser(null);
    callback();
  };

  const authContextValue: AuthContextType = {
    user: user,
    signin: signin,
    signout: signout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext, useAuth };
