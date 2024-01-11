import { SignInContainer } from "./containers";
import { SignInProvider } from "./contexts";

export function SignIn() {
  return (
    <SignInProvider>
      <SignInContainer />
    </SignInProvider>
  );
}
