import { Input } from "@shared/components";
import * as S from "./styles";
import LogoSVG from "@assets/logo.svg";

export function SignIn() {
  return (
    <S.Container>
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
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyLabel="Done"
            returnKeyType="done"
          />
          <Input
            placeholder="Senha"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyLabel="Done"
            returnKeyType="done"
            secureTextEntry
          />
        </S.Form>
      </S.FormContainer>
    </S.Container>
  );
}
