import styled, { DefaultTheme, css } from "styled-components/native";

export interface ButtonProps {
  variant?: "primary" | "secondary";
}

function getButtonVariantColor(
  variant: string,
  theme: DefaultTheme,
  disabled?: boolean
) {
  if (variant === "primary") {
    return theme.COLORS.blue;
  }

  return theme.COLORS.orange;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  padding: 15px;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ theme, variant, disabled }) => css`
    background-color: ${getButtonVariantColor(
      variant ?? "primary",
      theme,
      disabled
    )};
  `}
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.white,
}))`
`;

export const Title = styled.Text`
  text-align: center;
  ${({ theme, disabled }) => css`
    color: ${theme.COLORS.white};
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.small}px;
  `}
`;
