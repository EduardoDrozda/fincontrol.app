import { SignUp } from "@screens/SignUp/models";
import { createContext, useContext, useMemo, useState } from "react";
import { set } from "react-hook-form";

type PropsSignUpContext = {
  isLoading: boolean;
  handleSignUp: (credentials: SignUp) => Promise<void>;
};

const SignUpContext = createContext<PropsSignUpContext>(
  {} as PropsSignUpContext
);

type Props = {
  children: React.ReactNode;
};

const SignUpProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (credentials: SignUp) => {
    setIsLoading(true);
  };

  const providerValue = useMemo(
    () => ({
      isLoading,
      handleSignUp,
    }),
    [isLoading]
  );

  return (
    <SignUpContext.Provider value={providerValue}>
      {children}
    </SignUpContext.Provider>
  );
};

const useSignUpContext = () => {
  const context = useContext(SignUpContext);

  if (context === undefined) {
    throw new Error("useSignUpContext must be used within a SignUpProvider");
  }
  return context;
};

export { SignUpProvider, useSignUpContext };
