import { Button, Input } from "@shared/components";
import * as S from "./styles";
import LogoSVG from "@assets/logo.svg";
import { Controller, useForm } from "react-hook-form";
import { Platform, View } from "react-native";
import { ISignIn } from "@screens/SignIn/interfaces";

type Props = {
  isLoading: boolean;
  handleSignIn: (credentials: ISignIn) => Promise<void>;
};

export function SignInLayout({ isLoading, handleSignIn }: Readonly<Props>) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: ISignIn) => handleSignIn(data);

  return (
    <S.Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <S.TitleContainer>
        <LogoSVG />
        <S.Title>Fincontrol</S.Title>
        <S.SubTitle>
          Controle suas {"\n"} finanças de forma muito simples
        </S.SubTitle>
      </S.TitleContainer>
      <S.FormContainer>
        <S.Form>
          <Controller
            control={control}
            name="email"
            rules={{
              required: {
                value: true,
                message: "O e-mail é obrigatório",
              },
            }}
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <S.InputContainer>
                <Input
                  placeholder="E-mail"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  returnKeyLabel="Done"
                  returnKeyType="done"
                  icon="mail"
                  onChangeText={onChange}
                  value={value}
                />
                {errors.email ? (
                  <S.ErrorText>{errors.email.message}</S.ErrorText>
                ) : (
                  <View style={{ marginTop: 8, marginBottom: 8 }} />
                )}
              </S.InputContainer>
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{
              required: {
                value: true,
                message: "A senha é obrigatória",
              },
              minLength: {
                value: 6,
                message: "A senha deve ter no mínimo 6 caracteres",
              },
            }}
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <S.InputContainer>
                <Input
                  placeholder="Senha"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyLabel="Done"
                  returnKeyType="done"
                  icon="lock"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                />
                {errors.password ? (
                  <S.ErrorText>{errors.password.message}</S.ErrorText>
                ) : (
                  <View style={{ marginTop: 8, marginBottom: 8 }} />
                )}
              </S.InputContainer>
            )}
          />
          <S.SignInContainer>
            <Button
              title="Entrar"
              variant="secondary"
              isLoading={isLoading}
              onPress={handleSubmit(onSubmit, undefined)}
            />
          </S.SignInContainer>
        </S.Form>
        <S.ForgotPasswordContainer>
          <S.ForgotPasswordButton>
            <S.ForgotPasswordText>Esqueceu a senha?</S.ForgotPasswordText>
          </S.ForgotPasswordButton>
        </S.ForgotPasswordContainer>
        <S.SignUpContainer>
          <S.SignUpButton>
            <S.SignUpText>
              Não Possui cadastro?
              <S.SignUpBoldText> Cadastre-se</S.SignUpBoldText>
            </S.SignUpText>
          </S.SignUpButton>
        </S.SignUpContainer>
      </S.FormContainer>
    </S.Container>
  );
}
