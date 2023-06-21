import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import { ThemeProvider } from "styled-components";

import { Intro } from "@screens/Intro";
import { defaultTheme } from "@themes/default-theme";
import { Loading } from "@components/Loading";

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
    <NativeBaseProvider>
      <ThemeProvider theme={defaultTheme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Intro /> : <Loading />}
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
