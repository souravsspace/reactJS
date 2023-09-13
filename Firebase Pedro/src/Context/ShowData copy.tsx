import { createContext, useContext, useEffect, useState } from "react";
import { showDataProviderProps, showDataContextType } from "../Types/DataTypes";

import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { auth } from "../Config/Firebase.config";
import { DB } from "../Config/Firebase.config";

import { useNavigate } from "react-router-dom";

const showDataContext = createContext({} as showDataContextType);

export const useShowData = () => useContext(showDataContext);

export default function ShowDataProvider({ children }: showDataProviderProps) {
  const [userInfo, setUserInfo] = useState<object[]>([]);

  const [isLoggedOut, setIsLoggedOut] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // const [getUserEmail, setGetUserEmail] = useState("");

  const navigate = useNavigate();
  const userData = collection(DB, "users-data");

  const getUserInfo = async () => {
    if (isLoggedOut === true) {
      try {
        const data = await getDocs(userData);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        return setUserInfo(filteredData);
      } catch (error) {
        console.log(error);
      }
    }
    return;
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  getUserInfo();

  async function handleSignup(
    e: React.FormEvent<HTMLFormElement>,
    password: string,
    passwordConfirm: string,
    name: string,
    age: string,
    email: string
  ) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      setSuccess("Account created successfully!");
      await createUserWithEmailAndPassword(auth, email, password);
      await addDoc(userData, {
        name: name as string,
        age: age as string,
        email: email as string,
        password: password as string,
      });
      navigate("/home");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  async function handleLoginOut() {
    try {
      setLoading(true);
      await signOut(auth);
      setIsLoggedOut((curr) => !curr);
    } catch {
      console.log("Failed to logout");
    }
    setLoading(false);
  }

  async function handleLogin(
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) {
    e.preventDefault();

    try {
      setError("");
      await signInWithEmailAndPassword(
        auth,
        email as string,
        password as string
      );
      setSuccess("Logged in successfully!");
      setLoading(true);
      navigate("/");
      // setGetUserEmail(email);
    } catch {
      setError("Failed to login");
    }
    setLoading(false);
  }

  return (
    <showDataContext.Provider
      value={{
        isLoggedOut,
        handleSignup,
        handleLogin,
        handleLoginOut,
        loading,
        error,
        success,
        userInfo,
        // getUserEmail
      }}
    >
      {children}
    </showDataContext.Provider>
  );
}
