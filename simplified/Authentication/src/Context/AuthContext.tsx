import { createContext, useContext, useEffect, useState } from "react";
import { Auth } from "../Firebase/Firebase";

type AuthContextProviderProps = {
  children: React.ReactNode;
};

type userType = {
  email: string;
  password: string;
};

type AuthContextType = {
  currentUser: userType | null;
  signUp: ({ email, password }: userType) => void;
};

const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [currentUser, setCurrentUser] = useState<any>();

  const signUp = ({ email, password }: userType) => {
    return Auth.createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsubscribe = Auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
