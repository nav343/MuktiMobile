import { SafeAreaView } from "react-native-safe-area-context";
import { Theme } from "../utils/themes/Theme";
import {
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

export default function CreateTasks(props: Theme) {
  const { colors } = props;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [bg, setBg] = useState<string>(colors.bg as string);
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [addn, setAddn] = useState<string>("");

  const borderColors = [
    "#BF092F",
    "#F25912",
    "#FEB21A",
    "#043915",
    "#B6AE9F",
    "#9E1C60",
    "#CD2C58",
    "#211832",
    "#09122C",
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
            backgroundColor: bg,
            padding: 30,
            borderBottomEndRadius: 30,
            borderBottomStartRadius: 30,
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
                  color={colors.text}
                  fontSize={24}
                  style={{ marginRight: 10 }}
                  onPress={() => navigation.goBack()}
                />
                <Text
                  style={{ color: colors.text, fontSize: 38, fontWeight: 600 }}
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
                placeholderTextColor={"gray"}
                style={{
                  fontSize: 28,
                  color: colors.text,
                  borderRadius: 10,
                  borderColor: colors.text,
                  borderWidth: 1,
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  marginVertical: 10,
                }}
              />
            </View>

            <ScrollView
              horizontal
              style={{ marginTop: 20 }}
              showsHorizontalScrollIndicator={false}
            >
              {borderColors.map((c) => (
                <TouchableOpacity
                  onPress={() => setBg(c)}
                  style={{
                    padding: 20,
                    borderColor: colors.bg,
                    borderWidth: 0.5,
                    borderRadius: 100,
                    width: 20,
                    height: 20,
                    backgroundColor: c,
                    marginHorizontal: 15,
                  }}
                />
              ))}
            </ScrollView>

            <View style={{ marginTop: 30 }}>
              <Text style={{ fontSize: 18, color: colors.text_inverted }}>
                Description
              </Text>
              <TextInput
                placeholder="Add a description"
                multiline
                onChangeText={(e) => setDesc(e)}
                value={desc}
                style={{
                  fontSize: 18,
                  color: colors.text,
                  borderRadius: 10,
                  borderColor: colors.text,
                  borderWidth: 1,
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  marginVertical: 10,
                }}
                placeholderTextColor={"gray"}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: colors.text_inverted,
                  marginTop: 20,
                }}
              >
                Additional Notes
              </Text>
              <TextInput
                placeholder="Additional Notes"
                placeholderTextColor={"gray"}
                multiline
                value={addn}
                onChangeText={(e) => setAddn(e)}
                style={{
                  fontSize: 18,
                  color: colors.text,
                  borderRadius: 10,
                  borderColor: colors.text,
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
      <StatusBar backgroundColor={bg} />
    </>
  );
}
