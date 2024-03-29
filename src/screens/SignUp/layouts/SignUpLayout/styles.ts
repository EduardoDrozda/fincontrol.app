import styled, { css } from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.blue};
`;

export const TitleContainer = styled.View`
  width: 100%;
  height: 45%;

  padding: 0 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: 15px;

  ${({ theme }) => css`
    color: ${theme.COLORS.white};
    font-family: ${theme.FONT_FAMILY.regular};
    font-size: ${theme.FONT_SIZE.large}px;
  `};
`;

export const SubTitle = styled.Text`
  margin-top: 40px;

  ${({ theme }) => css`
    color: ${theme.COLORS.white};
    font-family: ${theme.FONT_FAMILY.semi};
    font-size: ${theme.FONT_SIZE.extraLarge}px;
    text-align: center;
  `};
`;

export const FormContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background};
  padding: 0 30px;
`;

export const Form = styled.View`
  margin-top: -40px;
`;

export const InputContainer = styled.View`
  width: 100%;
`;

export const ErrorText = styled.Text`
  margin: 10px 0;
  ${({ theme }) => css`
    color: ${theme.COLORS.red};
    font-family: ${theme.FONT_FAMILY.regular};
    font-size: ${theme.FONT_SIZE.small}px;
  `}
`;

export const SignUpButtonContainer = styled.View`
  width: 100%;
  margin-top: 10px;
  align-items: center;

  margin-top: 10px;
`;