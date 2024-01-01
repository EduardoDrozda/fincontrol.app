import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 60px;
    background: ${theme.COLORS.white};
    border-radius: 10px;
    margin-bottom: 8px;
    border-width: 2px;
    border-color: ${theme.COLORS.white};
    flex-direction: row;
    align-items: center;
  `}
`;

export const Container = styled.TextInput`
  width: 100%;
  height: 100%;

  ${({ theme }) => css`
    color: ${theme.COLORS.title};
    font-family: ${theme.FONT_FAMILY.regular};
    font-size: ${theme.FONT_SIZE.small}px;
    padding-left: 10px;
  `}
`;
