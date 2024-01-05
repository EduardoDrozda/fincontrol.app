import { SignInContainer } from "./containers";
import { SignInProvider } from "./context";

export function SignIn() {
  return (
    <SignInProvider>
      <SignInContainer />
    </SignInProvider>
  );
}
