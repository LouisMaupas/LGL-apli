interface HttpErrorProps {
    code: number;
    title: string;
    message: string;
  }

  interface NewsProps {
    id: number;
    title: string;
    content: string;
    image: string;
    tag: string;
  }

  interface AuthProviderProps {
    children: React.ReactNode;
  }
  
  interface User {
    email?: string | null;
    displayName?: string | null;
    accessToken?: string | null;
    phoneNumber?: string | null;
    photoURL?: string | null;
    uid?: string | null;
    [key: string]: any;
  }
  
  interface AuthContextType {
    user: User | null;
    signin: (user: User, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
  }

export type { HttpErrorProps, AuthProviderProps, AuthContextType, User, NewsProps };