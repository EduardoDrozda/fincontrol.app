import * as S from "./styles";
import LogoSVG from "@assets/logo.svg";

export function SignIn() {
  return (
    <S.Container>
      <S.TitleContainer>
        <LogoSVG />
        <S.Title>Fincontrol</S.Title>
        <S.SubTitle>Controle suas {'\n'} finanças de forma muito simples</S.SubTitle>
        <S.LoginMessage>Faça seu login abaixo</S.LoginMessage>
      </S.TitleContainer>
      <S.FormContainer></S.FormContainer>
    </S.Container>
  );
}
