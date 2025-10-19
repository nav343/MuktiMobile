import { SafeAreaView } from "react-native-safe-area-context";
import { Theme } from "../utils/themes/Theme";
import { Text, View } from "react-native";
import { ArrowLeft, CalendarClock } from "lucide-react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Timeline } from "react-native-calendars";
import { useState } from "react";

export default function Reminders(props: Theme) {
  const { colors } = props;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView
      style={{
        padding: 30,
        backgroundColor: colors.bg,
        flex: 1,
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
            Reminders
          </Text>
        </View>
        <View
          style={{
            padding: 10,
            borderWidth: 2,
            borderRadius: 999,
            borderColor: "gray",
            marginRight: 10,
          }}
        >
          <CalendarClock color={colors.text} width={24} height={24} />
        </View>
      </View>

      <View style={{ height: "90%" }}>
        <Timeline
          events={[{ start: "01:00", end: "12:00", title: "testing" }]}
          theme={{ backgroundColor: "red" }}
        />
      </View>
    </SafeAreaView>
  );
}
