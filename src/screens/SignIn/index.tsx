import { Button, Input } from "@shared/components";
import * as S from "./styles";
import LogoSVG from "@assets/logo.svg";
import { Controller, useForm } from "react-hook-form";
import { Platform, View } from "react-native";

export function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <S.Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <S.TitleContainer>
        <LogoSVG />
        <S.Title>Fincontrol</S.Title>
        <S.SubTitle>
          Controle suas {"\n"} finanças de forma muito simples
        </S.SubTitle>
        <S.LoginMessage>Faça seu login abaixo</S.LoginMessage>
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
              onPress={handleSubmit(onSubmit, () => console.log(errors))}
            />
          </S.SignInContainer>
        </S.Form>
      </S.FormContainer>
    </S.Container>
  );
}
