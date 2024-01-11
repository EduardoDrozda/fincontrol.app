import * as S from "./styles";
import { SignUp } from "@screens/SignUp/models";
import { Controller, useForm } from "react-hook-form";
import { Button, Input } from "@shared/components";
import { View } from "react-native";

type Props = {
  isLoading: boolean;
  handleSignUp: (credentials: SignUp) => Promise<void>;
};

export function SignUpLayout({ isLoading, handleSignUp }: Readonly<Props>) {
  const { control, handleSubmit } = useForm<SignUp>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: SignUp) => handleSignUp(data);

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Crie sua conta abaixo</S.Title>
        <S.SubTitle>E comece a organizar suas finanças pessoais</S.SubTitle>
      </S.TitleContainer>
      <S.FormContainer>
        <S.Form>
          <Controller
            control={control}
            name="name"
            rules={{
              required: {
                value: true,
                message: "O name é obrigatório",
              },
            }}
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <S.InputContainer>
                <Input
                  placeholder="Nome"
                  autoCorrect={false}
                  returnKeyLabel="Done"
                  returnKeyType="done"
                  onChangeText={onChange}
                  value={value}
                />
                {errors.name ? (
                  <S.ErrorText>{errors.name.message}</S.ErrorText>
                ) : (
                  <View style={{ marginTop: 8, marginBottom: 8 }} />
                )}
              </S.InputContainer>
            )}
          />

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
                message: "A senha é um campo obrigatório",
              },
            }}
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <S.InputContainer>
                <Input
                  placeholder="Senha"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  returnKeyLabel="Done"
                  returnKeyType="done"
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

          <Controller
            control={control}
            name="email"
            rules={{
              required: {
                value: true,
                message: "A senha é um campo obrigatório",
              },
            }}
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <S.InputContainer>
                <Input
                  placeholder="Confirm a senha"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  returnKeyLabel="Done"
                  returnKeyType="done"
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
          <S.SignUpButtonContainer>
            <Button
              title="Entrar"
              variant="secondary"
              isLoading={isLoading}
              onPress={handleSubmit(onSubmit, undefined)}
            />
          </S.SignUpButtonContainer>
        </S.Form>
      </S.FormContainer>
    </S.Container>
  );
}
