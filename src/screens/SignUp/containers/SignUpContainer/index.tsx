import { useSignUpContext } from "@screens/SignUp/contexts";
import { SignUpLayout } from "@screens/SignUp/layouts";

export function SignUpContainer() {
  const { isLoading, handleSignUp } = useSignUpContext();
  return <SignUpLayout isLoading={isLoading} handleSignUp={handleSignUp} />;
}
