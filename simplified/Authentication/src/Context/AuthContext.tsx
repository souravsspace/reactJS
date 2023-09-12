import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase";

type AuthContextProviderProps = {
  children: React.ReactNode;
};

type userType = {
  email: string;
  password: string;
};

type AuthContextType = {
  currentUser: userType | null;
  signUp: ({ email, password }: userType) => Promise<any>;
  login: ({ email, password }: userType) => Promise<any>;
};

const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [currentUser, setCurrentUser] = useState<any>();

  function signUp({ email, password }: userType) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login({ email, password }: userType) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signUp, login }}>
      {children}
    </AuthContext.Provider>
  );
}
