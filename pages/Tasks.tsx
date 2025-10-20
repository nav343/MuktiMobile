import { SafeAreaView } from "react-native-safe-area-context";
import { Theme } from "../utils/themes/Theme";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  ArrowLeft,
  CircleCheckBig,
  Circle,
  Plus,
  Trash2,
  CircleQuestionMark,
} from "lucide-react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";

interface TaskData {
  title: string;
  desc: string;
  additional?: string;
  completed: boolean;
  color?: string;
}

export default function Tasks(props: Theme) {
  const { colors } = props;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [selectedId, setSelectedId] = useState<number>(-1);
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const [lastDeleted, setLastDeleted] = useState<any>();

  function changeState(prev: TaskData[], taskId: number): TaskData[] {
    const newTask = prev.map((data, id) => {
      if (id == taskId) {
        data.completed = !data.completed;
      }
      return data;
    });
    return newTask;
  }

  function deleteTask(prev: TaskData[], taskId: number): TaskData[] {
    setLastDeleted(prev.splice(taskId, 1)[0]);
    return prev;
  }
  const [tasks, setTasks] = useState<TaskData[]>([
    {
      title: "Task 1",
      desc: "This is a short description of Task 1",
      additional:
        "This is my very very very long long long text that explains what Task 1 is in lawman terms such that any idiotic 2nd grader can understand it",
      completed: false,
      color: "#FFC400",
    },
    {
      title: "Task 2",
      desc: "This is a short description of Task 2",
      additional:
        "This is my very very very long long long text that explains what Task 2 is in lawman terms such that any idiotic 2nd grader can understand it",
      completed: false,
      color: "#3674B5",
    },
    {
      title: "Task 3",
      desc: "This is a short description of Task 3",
      completed: false,
      color: "#A7E399",
    },
    {
      title: "Task 4",
      desc: "This is a short description of Task 4",
      additional: "Short shit here",
      completed: false,
      color: "#FF894F",
    },
  ]);

  return (
    <>
      {confirmation == true ? (
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "absolute",
            zIndex: 10000,
            top: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: colors.bg_inverted,
              width: "70%",
              padding: 20,
              paddingVertical: 40,
              borderRadius: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircleQuestionMark
              color={"#DC2525"}
              size={55}
              style={{ marginBottom: 10 }}
            />
            <Text
              style={{
                color: colors.text_inverted,
                fontSize: 28,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Task Deleted
            </Text>
            <Text style={{ color: "gray", fontSize: 22, marginTop: 5 }}>
              Do you want to redo?
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                width: "70%",
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setTasks((prev) => [...prev, lastDeleted]);
                  setConfirmation(!confirmation);
                }}
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderColor: colors.bg,
                  borderWidth: 1,
                  borderRadius: 20,
                }}
              >
                <Text style={{ color: colors.text_inverted, fontSize: 18 }}>
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setConfirmation(!confirmation)}
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  backgroundColor: "#DC2525",
                  borderRadius: 20,
                }}
              >
                <Text style={{ color: colors.text, fontSize: 18 }}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <></>
      )}
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.bg,
          padding: 30,
          display: "flex",
          alignItems: "center",
        }}
      >
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
              color={colors.text}
              fontSize={24}
              style={{ marginRight: 10 }}
              onPress={() => navigation.goBack()}
            />
            <Text style={{ color: colors.text, fontSize: 38, fontWeight: 600 }}>
              Tasks
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("createTask")}
            style={{
              padding: 10,
              borderWidth: 2,
              borderRadius: 999,
              borderColor: "gray",
              marginRight: 10,
            }}
          >
            <Plus color={colors.text} width={24} height={24} />
          </TouchableOpacity>
        </View>

        {tasks.length != 0 ? (
          <ScrollView style={{ width: "100%", paddingVertical: 20 }}>
            {tasks.map((data, id) => (
              <TouchableOpacity
                onLongPress={() => setSelectedId(id)}
                key={id}
                activeOpacity={0.7}
                onPress={() => {
                  setTasks(changeState(tasks, id));
                  setSelectedId(-1);
                }}
                style={{
                  backgroundColor: selectedId == id ? "#3B9797" : colors.tile,
                  width: "100%",
                  padding: 30,
                  borderRadius: 20,
                  borderLeftWidth: 4,
                  borderLeftColor: data.color,
                  marginVertical: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  opacity: data.completed ? 0.6 : 1,
                }}
              >
                {data.completed ? (
                  <CircleCheckBig color={colors.text} size={28} />
                ) : (
                  <Circle color={colors.text} size={28} />
                )}
                <View style={{ width: "90%" }}>
                  <Text
                    style={{
                      color: data.color,
                      fontSize: 25,
                      fontWeight: 600,
                      textDecorationLine: data.completed
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {data.title}
                  </Text>
                  <Text
                    style={{
                      color: colors.text,
                      fontSize: 18,
                      marginVertical: 5,
                    }}
                  >
                    {data.desc}
                  </Text>
                  {data.additional != undefined ? (
                    <Text
                      style={{
                        color: colors.text,
                        fontSize: 14,
                        fontStyle: "italic",
                      }}
                    >
                      {data.additional}{" "}
                    </Text>
                  ) : (
                    <></>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <View
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: colors.text, fontSize: 38, fontWeight: 700 }}>
              You don't have any Tasks!
            </Text>
          </View>
        )}
        {selectedId != -1 ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setSelectedId(-1);
              setTasks(deleteTask(tasks, selectedId));
              setConfirmation(!confirmation);
            }}
            style={{
              position: "absolute",
              bottom: "10%",
              backgroundColor: colors.bg_inverted,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 30,
              borderRadius: 99,
              paddingVertical: 20,
            }}
          >
            <Trash2 color={"#DC2525"} size={38} />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </SafeAreaView>
    </>
  );
}
