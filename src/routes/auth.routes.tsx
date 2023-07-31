import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { Login } from "@screens/Login";

type AuthRoutes = {
  login: undefined;
};

export type AuthNavigatorRoutesProps = StackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
    </Navigator>
  );
}
