import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { TabRoutes } from "./tab.routes";
import { Players } from "@screens/Players";
import { Historic } from "@screens/Historic";

type AppRoutes = {
  tabs: undefined;
  players: undefined;
  historic: undefined;
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="tabs" component={TabRoutes} />
      <Screen name="historic" component={Historic} />
      <Screen name="players" component={Players} />
    </Navigator>
  );
}
