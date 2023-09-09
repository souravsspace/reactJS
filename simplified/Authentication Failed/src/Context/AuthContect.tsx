import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../Firebase/Firebase";

type AuthContectProps = {
  children: ReactNode;
};

// type userType = {
//   email: string | number;
//   password: string | number;
// };

const AppContext = createContext({});

export const useAuth = () => useContext(AppContext);

export function AuthContect({ children }: AuthContectProps) {
  const [currentUser, setCurrentUser] = useState<userType>();

  const signUpF = (user: any) => {
    return auth.createUserWithEmailAndPassword(user.email, user.password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) =>
      setCurrentUser(user)
    );
    return unsubscribe;
  }, []);

  const theUser = {
    currentUser,
  };
  return (
    <AppContext.Provider value={{ theUser, signUpF }}>
      {children}
    </AppContext.Provider>
  );
}
