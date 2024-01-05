import { useSignInContext } from "@screens/SignIn/context";
import { SignInLayout } from "@screens/SignIn/layout";

export function SignInContainer() {
  const { isLoading, handleSignIn } = useSignInContext();

  return <SignInLayout isLoading={isLoading} handleSignIn={handleSignIn} />;
}
