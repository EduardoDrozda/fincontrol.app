import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useSignInContext } from "@screens/SignIn/contexts";
import { SignInLayout } from "@screens/SignIn/layouts";

export function SignInContainer() {
  const { isLoading, handleSignIn } = useSignInContext();
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleSignUp() {
    navigation.navigate("signUp");
  }

  return (
    <SignInLayout
      isLoading={isLoading}
      handleSignIn={handleSignIn}
      handleSignUp={handleSignUp}
    />
  );
}
