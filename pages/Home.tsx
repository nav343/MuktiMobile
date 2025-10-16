import { Theme } from "../utils/themes/Theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./Settings";
import { TabBar } from "../utils/TabBar";
import Dashboard from "./Dashboard";
import ChatBot from "./ChatBot";
import Progress from "./Progress";
import Emergency from "./Emergency";

const Tab = createBottomTabNavigator();
export default function Home(props: Theme) {
  const { theme, setTheme, colors } = props;
  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.bg,
      }}
    >
      <Tab.Navigator
        initialRouteName="Dashboard"
        tabBar={(props) => (
          <TabBar
            theme={theme}
            setTheme={setTheme}
            colors={colors}
            {...props}
          />
        )}
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            display: "none",
          },
        }}
      >
        <Tab.Screen name="Chat">
          {() => <ChatBot theme={theme} setTheme={setTheme} colors={colors} />}
        </Tab.Screen>

        <Tab.Screen name="Progress">
          {() => <Progress theme={theme} setTheme={setTheme} colors={colors} />}
        </Tab.Screen>

        <Tab.Screen name="Dashboard">
          {() => (
            <Dashboard theme={theme} setTheme={setTheme} colors={colors} />
          )}
        </Tab.Screen>

        <Tab.Screen name="Emergency">
          {() => (
            <Emergency theme={theme} setTheme={setTheme} colors={colors} />
          )}
        </Tab.Screen>

        <Tab.Screen name="Settings">
          {() => <Settings theme={theme} setTheme={setTheme} colors={colors} />}
        </Tab.Screen>
      </Tab.Navigator>
    </SafeAreaView>
  );
}
