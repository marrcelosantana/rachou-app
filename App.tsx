import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import { Intro } from "@screens/Intro";
import { defaultTheme } from "@themes/default-theme";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded && <Intro />}
    </ThemeProvider>
  );
}
