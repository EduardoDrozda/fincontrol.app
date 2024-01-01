import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const TitleContainer = styled.View`
  width: 100%;
  height: 60%;

  padding: 0 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.blue};
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

export const LoginMessage = styled.Text`
  margin-top: 100px;

  ${({ theme }) => css`
    color: ${theme.COLORS.white};
    font-family: ${theme.FONT_FAMILY.regular};
    font-size: ${theme.FONT_SIZE.medium}px;
    text-align: center;
  `};
`;

export const FormContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.orange};
`;

export const Form = styled.View`
  margin-top: -30px;
  padding: 0 10px;
`;

export const SignInContainer = styled.View`
  margin-top: 30px;
  padding: 0 10px;

  justify-content: center;
  align-items: center;
`;
