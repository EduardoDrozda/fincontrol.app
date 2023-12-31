import {
  DefaultTheme,
  NavigationContainer,
  useTheme,
} from "@react-navigation/native";
import { View } from "react-native";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = colors.background;

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </View>
  );
}
