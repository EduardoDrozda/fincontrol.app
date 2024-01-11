import { ISignIn } from "@screens/SignIn/interfaces";
import { signInService } from "@screens/SignIn/services";
import { IRequestError } from "@shared/data-access";
import { AxiosError } from "axios";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { Alert } from "react-native";

type PropsSignInContext = {
  isLoading: boolean;
  handleSignIn: (credentials: ISignIn) => Promise<void>;
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

  const handleSignIn = async (credentials: ISignIn) => {
    setIsLoading(true);
    try {
      const result = await signInService.signIn(credentials);
    } catch (error: any) {
      const err = error as AxiosError<IRequestError>;
      Alert.alert("Credenciais invalidas", err.response?.data.message);
    } finally {
      setIsLoading(false);
    }
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
