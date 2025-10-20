import { SafeAreaView } from "react-native-safe-area-context";
import { Theme } from "../utils/themes/Theme";
import {
  Animated,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ArrowLeft } from "lucide-react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

interface TaskColor {
  color: string;
  theme: "light" | "dark";
}
export default function CreateTasks(props: Theme) {
  const { colors, theme } = props;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [taskColor, setTaskColor] = useState<TaskColor>({
    color: colors.bg as string,
    theme: theme as "light" | "dark",
  });
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [addn, setAddn] = useState<string>("");

  const animatedValue = new Animated.Value(1);
  Animated.timing(animatedValue, {
    toValue: 0.8,
    duration: 500,
    useNativeDriver: true,
  }).start();

  const taskColors: TaskColor[] = [
    { color: "#BF092F", theme: "light" },
    { color: "#F25912", theme: "light" },
    { color: "#FEB21A", theme: "light" },
    { color: "#043915", theme: "dark" },
    { color: "#B6AE9F", theme: "light" },
    { color: "#9E1C60", theme: "dark" },
    { color: "#CD2C58", theme: "light" },
    { color: "#211832", theme: "dark" },
    { color: "#09122C", theme: "dark" },
  ];

  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: colors.bg,
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            backgroundColor: taskColor?.color,
            padding: 30,
            borderBottomEndRadius: 40,
            borderBottomStartRadius: 40,
            height: "60%",
          }}
        >
          <ScrollView>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ArrowLeft
                  color={
                    taskColor?.theme == "light"
                      ? colors.text_inverted
                      : colors.text
                  }
                  fontSize={24}
                  style={{ marginRight: 10 }}
                  onPress={() => navigation.goBack()}
                />
                <Text
                  style={{
                    color:
                      taskColor?.theme == "light"
                        ? colors.text_inverted
                        : colors.text,
                    fontSize: 38,
                    fontWeight: 600,
                  }}
                >
                  New Task
                </Text>
              </View>
            </View>

            <View>
              <TextInput
                onChangeText={(e) => setName(e)}
                value={name}
                placeholder="Task Name"
                placeholderTextColor={
                  taskColor?.theme == "dark"
                    ? colors.text
                    : colors.text_inverted
                }
                style={{
                  fontSize: 28,
                  borderRadius: 10,
                  borderColor:
                    taskColor?.theme == "dark"
                      ? colors.text
                      : colors.text_inverted,
                  borderWidth: 1,
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  marginVertical: 10,
                  color:
                    taskColor?.theme == "dark"
                      ? colors.text
                      : colors.text_inverted,
                }}
              />
            </View>

            <ScrollView
              horizontal
              style={{ marginTop: 20 }}
              showsHorizontalScrollIndicator={false}
            >
              {taskColors.map((c) => (
                <Animated.View>
                  <TouchableOpacity
                    onPress={() => setTaskColor(c)}
                    style={{
                      padding: 20,
                      borderColor:
                        taskColor?.theme == "dark"
                          ? colors.text
                          : colors.text_inverted,
                      borderWidth: 0.5,
                      borderRadius: 100,
                      width: 20,
                      height: 20,
                      backgroundColor: c.color,
                      marginHorizontal: 15,
                      transform: [
                        {
                          scale: taskColor.color == c.color ? animatedValue : 1,
                        },
                      ],
                    }}
                  />
                </Animated.View>
              ))}
            </ScrollView>

            <View style={{ marginTop: 30 }}>
              <Text
                style={{
                  fontSize: 18,
                  color:
                    taskColor?.theme == "dark"
                      ? colors.text
                      : colors.text_inverted,
                }}
              >
                Description
              </Text>
              <TextInput
                placeholder="Add a description"
                multiline
                onChangeText={(e) => setDesc(e)}
                value={desc}
                style={{
                  fontSize: 18,
                  color:
                    taskColor?.theme == "dark"
                      ? colors.text
                      : colors.text_inverted,
                  borderRadius: 10,
                  borderColor:
                    taskColor?.theme == "dark"
                      ? colors.text
                      : colors.text_inverted,
                  borderWidth: 1,
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  marginVertical: 10,
                }}
                placeholderTextColor={
                  taskColor?.theme == "dark"
                    ? colors.text
                    : colors.text_inverted
                }
              />
              <Text
                style={{
                  fontSize: 18,
                  color:
                    taskColor?.theme == "dark"
                      ? colors.text
                      : colors.text_inverted,
                  marginTop: 20,
                }}
              >
                Additional Notes
              </Text>
              <TextInput
                placeholder="Additional Notes"
                placeholderTextColor={
                  taskColor?.theme == "dark"
                    ? colors.text
                    : colors.text_inverted
                }
                multiline
                value={addn}
                onChangeText={(e) => setAddn(e)}
                style={{
                  fontSize: 18,
                  color: colors.text,
                  borderRadius: 10,
                  borderColor:
                    taskColor?.theme == "dark"
                      ? colors.text
                      : colors.text_inverted,
                  borderWidth: 1,
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  marginVertical: 10,
                }}
              />
            </View>
          </ScrollView>
        </View>

        <View style={{}}>
          <TouchableOpacity
            style={{
              paddingVertical: 20,
              paddingHorizontal: 50,
              borderRadius: 30,
              backgroundColor: colors.bg_inverted,
              marginBottom: 20,
            }}
            activeOpacity={0.7}
          >
            <Text style={{ color: colors.text_inverted, fontSize: 28 }}>
              Create Task
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <StatusBar backgroundColor={taskColor?.color} />
    </>
  );
}
