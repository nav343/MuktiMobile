import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Theme } from "../utils/themes/Theme";
import {
  Headset,
  HeartPlusIcon,
  Hospital,
  Logs,
  LucideIcon,
  Pill,
  Siren,
  TriangleAlert,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GridItems } from "../types/Types";

export default function Emergency(props: Theme) {
  const { colors } = props;

  const SupportItems: GridItems[][] = [
    [
      {
        title: "Team Support",
        icon: HeartPlusIcon,
        onPress: () => console.log("team support"),
      },
      {
        title: "Report Danger",
        icon: TriangleAlert,
        onPress: () => console.log("report danger"),
      },
    ],
    [
      {
        title: "Pill Reminder",
        icon: Pill,
        onPress: () => console.log("pill reminder"),
      },
      {
        title: "Emotional Support",
        icon: Headset,
        onPress: () => console.log("emotional support"),
      },
    ],
    [
      {
        title: "Hospitals Near Me",
        icon: Hospital,
        onPress: () => console.log("hospitals near me"),
      },

      {
        title: "Emergency History",
        icon: Logs,
        onPress: () => console.log("emergency history"),
      },
    ],
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: colors.bg,
        display: "flex",
        alignItems: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: colors.text, fontSize: 34, fontWeight: 500 }}>
          Emergency
        </Text>
        <Siren
          color={colors.text}
          fontSize={34}
          style={{ width: 30, height: 30, padding: 15 }}
        />
      </View>

      <ScrollView
        contentContainerStyle={{
          display: "flex",
          alignItems: "center",
        }}
        style={{
          width: "100%",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            marginTop: 50,
            padding: 50,
            borderWidth: 5,
            borderColor: "#DC2525",
            borderRadius: 999,
            width: 225,
            height: 225,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              padding: 40,
              backgroundColor: "#DC2525",
              borderRadius: 999,
              width: 200,
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Siren color={colors.text} size={80} />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            color: colors.text,
            fontSize: 18,
            fontWeight: 300,
            marginTop: 20,
          }}
        >
          Tap in case of emergency
        </Text>
        <TouchableOpacity
          style={{
            marginTop: 20,
            padding: 20,
            backgroundColor: colors.tile,
            borderRadius: 99,
            paddingHorizontal: 40,
          }}
          activeOpacity={0.7}
        >
          <Text style={{ color: colors.text, fontWeight: 600, fontSize: 20 }}>
            Emergency Numbers
          </Text>
        </TouchableOpacity>

        <View style={{ display: "flex", marginTop: 30, alignItems: "center" }}>
          {SupportItems.map((row) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {row.map((items, id) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={items.onPress}
                  key={id}
                  style={{
                    margin: 20,
                    backgroundColor: colors.tile,
                    padding: 40,
                    borderRadius: 30,
                    width: 200,
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <items.icon size={55} color={"#DC2525"} />
                  <Text
                    style={{
                      color: colors.text,
                      fontSize: 20,
                      textAlign: "center",
                      marginTop: 14,
                      fontWeight: 400,
                    }}
                  >
                    {items.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
