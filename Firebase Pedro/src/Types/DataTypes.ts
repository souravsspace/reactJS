export type showDataProviderProps = {
  children: React.ReactNode;
};

export type showDataContextType = {
  isLoggedOut: boolean;
  loading: boolean;
  error: string;
  success: string;
  getUserEmail?: string;

  handleLoginOut: () => void;

  handleSignup: (
    e: React.FormEvent<HTMLFormElement>,
    password: string,
    passwordConfirm: string,
    name: string,
    age: string,
    email: string
  ) => void;

  handleLogin: (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => void;

  userInfo: object[]
};
