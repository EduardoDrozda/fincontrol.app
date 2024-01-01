import { TextInputProps } from "react-native";

import * as S from "./styles";

export function Input({ ...rest }: Readonly<TextInputProps>) {
  return (
    <S.Wrapper>
      <S.Container {...rest} />
    </S.Wrapper>
  );
}
