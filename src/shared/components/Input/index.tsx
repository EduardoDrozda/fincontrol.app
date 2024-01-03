import { TextInputProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import * as S from "./styles";
import { useTheme } from "styled-components";

type Props = {
  icon?: keyof typeof MaterialIcons.glyphMap;
} & TextInputProps;

export function Input({ icon, ...rest }: Readonly<Props>) {
  return (
    <S.Wrapper>
      {icon && (
        <S.IconContainer>
          <S.Icon name={icon} size={24} />
        </S.IconContainer>
      )}
      <S.Container {...rest} hasIcon={!!icon} />
    </S.Wrapper>
  );
}
