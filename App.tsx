import { StatusBar } from "expo-status-bar";
import useTheme from "./hooks/useTheme";
import { Welcome, WelcomeThree, WelcomeTwo } from "./pages/Welcome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NewChat from "./pages/NewChat";
import Notifications from "./pages/Notifications";
import Reminders from "./pages/Reminders";
import Tasks from "./pages/Tasks";
import CreateTasks from "./pages/CreateTasks";

const Stack = createNativeStackNavigator();
function RootStack() {
  const { theme, setTheme, colors } = useTheme();
  return (
    <>
      <StatusBar
        style={theme == "dark" ? "light" : "dark"}
        backgroundColor={colors.bg}
      />
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Group>
          <Stack.Screen name="one">
            {() => (
              <Welcome theme={theme} setTheme={setTheme} colors={colors} />
            )}
          </Stack.Screen>
          <Stack.Screen name="two">
            {() => (
              <WelcomeTwo theme={theme} setTheme={setTheme} colors={colors} />
            )}
          </Stack.Screen>
          <Stack.Screen name="three">
            {() => (
              <WelcomeThree theme={theme} setTheme={setTheme} colors={colors} />
            )}
          </Stack.Screen>
        </Stack.Group>

        <Stack.Screen name="home">
          {() => <Home theme={theme} setTheme={setTheme} colors={colors} />}
        </Stack.Screen>

        <Stack.Screen name="notifications">
          {() => (
            <Notifications theme={theme} setTheme={setTheme} colors={colors} />
          )}
        </Stack.Screen>

        <Stack.Screen name="signup">
          {() => <Signup theme={theme} setTheme={setTheme} colors={colors} />}
        </Stack.Screen>

        <Stack.Screen name="login">
          {() => <Login theme={theme} setTheme={setTheme} colors={colors} />}
        </Stack.Screen>

        <Stack.Screen name="chat">
          {() => <NewChat theme={theme} setTheme={setTheme} colors={colors} />}
        </Stack.Screen>

        <Stack.Screen name="reminders">
          {() => (
            <Reminders theme={theme} setTheme={setTheme} colors={colors} />
          )}
        </Stack.Screen>

        <Stack.Screen name="tasks">
          {() => <Tasks theme={theme} setTheme={setTheme} colors={colors} />}
        </Stack.Screen>

        <Stack.Screen name="createTask">
          {() => (
            <CreateTasks theme={theme} setTheme={setTheme} colors={colors} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
