import { ISignIn } from "@screens/SignIn/interfaces";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";

type PropsSignInContext = {
  isLoading: boolean;
  handleSignIn: (credentials: ISignIn) => void;
};

const SignInContext = createContext<PropsSignInContext>(
  {} as PropsSignInContext
);

type Props = {
  children: ReactNode;
};

const DEFAULT_VALUE = {
  isLoading: false,
};

const SignInProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(DEFAULT_VALUE.isLoading);

  const handleSignIn = (credentials: ISignIn) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log('>', credentials);
    }, 1000);
  };

  const providerValue = useMemo(
    () => ({
      isLoading,
      handleSignIn,
    }),
    [isLoading]
  );

  return (
    <SignInContext.Provider value={providerValue}>
      {children}
    </SignInContext.Provider>
  );
};

const useSignInContext = () => {
  const context = useContext(SignInContext);

  if (context === undefined) {
    throw new Error("useSignInContext must be used within a SignInProvider");
  }
  return context;
};

export { SignInProvider, useSignInContext };
