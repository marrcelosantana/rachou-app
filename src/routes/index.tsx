import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <AuthRoutes /> */}
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
