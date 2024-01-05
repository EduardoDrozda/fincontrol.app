import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type Props = {
  title: string;
  isLoading?: boolean;
} & S.ButtonProps &
  TouchableOpacityProps;

export function Button({ title, isLoading, ...rest }: Readonly<Props>) {
  return (
    <S.Button {...rest} disabled={isLoading}>
      {isLoading ? <S.Loading /> : <S.Title>{title}</S.Title>}
    </S.Button>
  );
}
