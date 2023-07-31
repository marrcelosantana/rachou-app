import { Platform } from "react-native";
import { useTheme } from "styled-components/native";

import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import {
  House,
  PersonSimpleRun,
  SoccerBall,
  UserCircle,
} from "phosphor-react-native";

import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";
import { RegisterPlayer } from "@screens/RegisterPlayer";
import { NewMatch } from "@screens/NewMatch";

type TabRoutes = {
  home: undefined;
  registerPlayer: undefined;
  newMatch: undefined;
  profile: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator();

export type TabNavigatorRouterProps = BottomTabNavigationProp<TabRoutes>;

export function TabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.COLORS.YELLOW,
        tabBarInactiveTintColor: theme.COLORS.WHITE,
        tabBarStyle: {
          backgroundColor: theme.COLORS.BLUE,
          borderColor: theme.COLORS.GRAY_1,
          height: 50,
          width: "80%",
          borderRadius: 9999,
          marginBottom: 30,
          marginLeft: 35,
          position: "absolute",
          paddingTop: Platform.OS === "android" ? 2 : 30,
          borderTopWidth: 0,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <House size={size} color={color} />,
        }}
      />

      <Screen
        name="registerPlayer"
        component={RegisterPlayer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <PersonSimpleRun size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="newMatch"
        component={NewMatch}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SoccerBall size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <UserCircle size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
