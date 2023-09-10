import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "@themes/default-theme";
import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";
import { MatchContextProvider } from "@contexts/matchContext";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return (
    <NativeBaseProvider>
      <MatchContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          {fontsLoaded ? <Routes /> : <Loading />}
        </ThemeProvider>
      </MatchContextProvider>
    </NativeBaseProvider>
  );
}
