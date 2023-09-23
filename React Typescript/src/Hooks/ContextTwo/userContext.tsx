import { createContext, useContext, useState } from "react";

type UserContextProviderProps = {
  children: React.ReactNode;
};

type UserContextType = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

type UserType = {
  name: string;
  email: string;
};

const UserContext = createContext<UserContextType | null>(null);

export const useUserContext = () => useContext(UserContext);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<UserType | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
