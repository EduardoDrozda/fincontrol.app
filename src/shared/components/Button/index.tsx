import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type Props = {
  title: string;
} & S.ButtonProps &
  TouchableOpacityProps;

export function Button({ title, ...rest }: Readonly<Props>) {
  return (
    <S.Button {...rest}>
      <S.Title disabled={rest.disabled}>{title}</S.Title>
    </S.Button>
  );
}
