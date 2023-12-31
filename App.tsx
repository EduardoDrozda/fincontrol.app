import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";

import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";

import theme from "./src/theme";

import "react-native-gesture-handler";
import { Loading } from "@shared/components";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {/* {fontsLoaded ? <Routes /> : <Loading />} */}
      <Loading />
    </ThemeProvider>
  );
}
