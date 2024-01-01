import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Wrapper = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;

  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;

  ${({ theme }) => css`
    background: ${theme.COLORS.white};
    border-color: ${theme.COLORS.white};
  `}
`;

export const IconContainer = styled.View`
  width: 40px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.text,
}))``;

type Props = {
  hasIcon?: boolean;
};

export const Container = styled.TextInput<Props>`
  width: 100%;
  height: 100%;

  ${({ theme, hasIcon }) => css`
    color: ${theme.COLORS.title};
    font-family: ${theme.FONT_FAMILY.regular};
    font-size: ${theme.FONT_SIZE.small}px;

    ${!hasIcon && `padding-left: 20px;`}
  `}
`;
