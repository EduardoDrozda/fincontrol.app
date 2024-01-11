import { SignUpContainer } from "./containers";
import { SignUpProvider } from "./contexts";

export function SignUp() {
  return (
    <SignUpProvider>
      <SignUpContainer />
    </SignUpProvider>
  );
}
