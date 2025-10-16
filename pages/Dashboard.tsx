import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Theme } from "../utils/themes/Theme";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import USERICON from "../assets/usericon.jpeg";
import {
  BedDouble,
  BellRing,
  CalendarClock,
  ChevronRight,
  LucideIcon,
  Pill,
  Sun,
  Utensils,
} from "lucide-react-native";
import { useEffect, useState } from "react";
import ChooseMood from "./ChooseMood";
import MoodPopup from "./MoodPopup";
import { PieChart } from "react-native-gifted-charts";

interface Mood {
  icon: string;
  mood: string;
}
interface DashboardDataType {
  value: string;
  title: string;
  desc: string;
  icon: {
    opacity: number;
    icon: LucideIcon;
    color: string;
  };
}
export default function Dashboard(props: Theme) {
  const { theme, colors, setTheme } = props;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [time, setTime] = useState(new Date().getHours());

  useEffect(() => {
    let secTimer = setInterval(
      () => {
        setTime(new Date().getHours());
      },
      1000 * 60 * 60,
    );

    return () => clearInterval(secTimer);
  }, []);

  const mood: Mood[] = [
    { icon: "😀", mood: "happy" },
    { icon: "🙂", mood: "smile" },
    { icon: "😇", mood: "peace" },
    { icon: "🙁", mood: "thoughtfully_sad" },
    { icon: "😔", mood: "pensive" },
    { icon: "😞", mood: "extremely_pensive" },
    { icon: "😫", mood: "guilty" },
    { icon: "😡", mood: "angry" },
  ];

  const DashboardData: DashboardDataType[][] = [
    [
      {
        title: "Sleep",
        desc: "Adequate Sleep! Maintain it.",
        value: "7h 30m",
        icon: {
          opacity: 0.3,
          color: "0, 153, 255",
          icon: BedDouble,
        },
      },
      {
        title: "Sunlight",
        desc: "You've done it!",
        value: "2h",
        icon: {
          opacity: 0.3,
          color: "255, 178, 44",
          icon: Sun,
        },
      },
    ],
    [
      {
        title: "Fasting",
        desc: "Good start. Keep it up",
        value: "1h 23m",
        icon: {
          opacity: 0.3,
          color: "28, 53, 45",
          icon: Utensils,
        },
      },
      {
        title: "Suppliments",
        desc: "Keep taking your meds on time",
        value: "15 pcs.",
        icon: {
          opacity: 0.3,
          color: "111, 74, 142",
          icon: Pill,
        },
      },
    ],
  ];

  const [moodOpen, setMoodOpen] = useState<boolean>(false);
  const [selectedMood, setMood] = useState<Mood>({ icon: "", mood: "" });
  const [activeNotif, setActiveNotif] = useState<boolean>(false);

  return (
    <>
      {selectedMood.mood != "" ? (
        <MoodPopup
          setMood={setMood}
          theme={theme}
          setTheme={setTheme}
          mood={selectedMood}
          colors={colors}
        />
      ) : (
        <></>
      )}
      {moodOpen ? (
        <ChooseMood
          moodOpen={moodOpen}
          setMoodOpen={setMoodOpen}
          colors={colors}
          theme={theme}
          setTheme={setTheme}
          setMood={setMood}
          selectedMood={selectedMood}
          mood={selectedMood}
        />
      ) : (
        <></>
      )}
      <ScrollView style={{ backgroundColor: colors.bg, flex: 1, padding: 20 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={USERICON}
              style={{ borderRadius: 999, width: 60, height: 60 }}
            />
            <View style={{ marginLeft: 20 }}>
              <Text
                style={{
                  color: theme == "light" ? "#44444E" : "#E0D9D9",
                  fontSize: 24,
                }}
              >
                {time > 0 && time < 12
                  ? "Good Morning"
                  : time >= 12 && time < 18
                    ? "Good afternoon"
                    : time >= 18 && time < 22
                      ? "Good evening"
                      : "Good night"}
                ,
              </Text>
              <Text
                style={{ color: colors.text, fontSize: 24, fontWeight: 600 }}
              >
                Nav343
              </Text>
            </View>
          </View>

          <View style={{ display: "flex", flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                padding: 10,
                borderWidth: 2,
                borderRadius: 999,
                borderColor: "gray",
                marginRight: 10,
              }}
              activeOpacity={0.7}
              onPress={() => navigation.navigate("notifications")}
            >
              <BellRing color={colors.text} width={24} height={24} />
              {activeNotif ? (
                <View
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 10,
                    height: 10,
                    padding: 1,
                    backgroundColor: "red",
                    borderRadius: 100,
                  }}
                />
              ) : (
                <></>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                borderWidth: 2,
                borderRadius: 999,
                borderColor: "gray",
              }}
              activeOpacity={0.7}
            >
              <CalendarClock color={colors.text} width={24} height={24} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#FFCC00",
            display: "flex",
            width: "100%",
            marginVertical: 20,
            borderRadius: 30,
            paddingVertical: 40,
            paddingHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                color: colors.text_inverted,
                fontWeight: 900,
                fontSize: 40,
              }}
            >
              Daily Score
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: colors.text_inverted,
                fontWeight: 300,
              }}
            >
              <Text style={{ fontWeight: 400 }}>4/7 </Text>Tasks completed
            </Text>
          </View>

          <View>
            <PieChart
              data={[
                {
                  value: Math.round((4 / 7) * 100),
                  color: "#41B06E",
                  focused: true,
                },
                { value: Math.round((3 / 7) * 100), color: "#222831" },
              ]}
              radius={55}
              innerRadius={45}
              isAnimated
              sectionAutoFocus
              extraRadius={3}
              curvedStartEdges
              curvedEndEdges
              centerLabelComponent={() => (
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 24, fontWeight: 700 }}>
                    {Math.round((4 / 7) * 100)}%
                  </Text>
                  <Text style={{ fontWeight: 100, fontSize: 12 }}>
                    Completed
                  </Text>
                </View>
              )}
              innerCircleColor={"#FFCC00"}
              tooltipBorderRadius={99}
              donut
            />
          </View>
        </View>

        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: colors.text,
                fontSize: 20,
                marginTop: 20,
                marginBottom: 5,
              }}
            >
              How's your mood today?
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setMoodOpen(!moodOpen)}
            >
              <ChevronRight color={"#FFCC00"} width={20} height={20} />
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            style={{ width: "100%" }}
            showsHorizontalScrollIndicator={false}
          >
            {mood.map((data, id) => (
              <TouchableOpacity
                key={id}
                activeOpacity={0.7}
                style={{
                  backgroundColor: colors.tile,
                  padding: 15,
                  borderRadius: 20,
                  margin: 5,
                }}
                onPress={() => setMood({ mood: data.mood, icon: data.icon })}
              >
                <Text style={{ fontSize: 35 }}>{data.icon}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View
          style={{
            display: "flex",
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginBottom: 30,
            paddingLeft: 20,
          }}
        >
          <View style={{ marginTop: 30 }}>
            {DashboardData[0].map((item, id) => (
              <View
                key={id}
                style={{
                  marginBottom: 30,
                  backgroundColor: colors.tile,
                  borderBottomWidth: 2,
                  borderLeftWidth: 2,
                  borderColor: `rgba(${item.icon.color}, 1)`,
                  borderRadius: 30,
                  padding: 20,
                  width: "90%",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    top: -20,
                    right: -10,
                    display: "flex",
                    padding: 15,
                    flexDirection: "row",
                    borderRadius: 99,
                    borderWidth: 5,
                    borderColor: colors.text_inverted,
                    backgroundColor: `rgba(${item.icon.color}, ${item.icon.opacity})`,
                    borderRightColor: `rgba(${item.icon.color},1)`,
                    transform: [{ rotate: "-45deg" }],
                  }}
                >
                  <item.icon.icon
                    width={24}
                    height={24}
                    color={colors.text}
                    style={{
                      transform: [{ rotate: "45deg" }],
                    }}
                  />
                </View>
                <Text
                  style={{ fontSize: 38, color: colors.text, fontWeight: 600 }}
                >
                  {item.value}
                </Text>
                <Text
                  style={{ color: colors.text, fontSize: 24, marginTop: 5 }}
                >
                  {item.title}
                </Text>
                <Text style={{ color: "gray", fontSize: 17 }}>{item.desc}</Text>
              </View>
            ))}
          </View>

          <View style={{ marginTop: 30 }}>
            {DashboardData[1].map((item, id) => (
              <View
                key={id}
                style={{
                  marginBottom: 30,
                  backgroundColor: colors.tile,
                  borderRadius: 30,
                  borderBottomWidth: 2,
                  borderLeftWidth: 2,
                  borderColor: `rgba(${item.icon.color}, 1)`,
                  padding: 20,
                  width: "85%",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    top: -20,
                    right: -10,
                    display: "flex",
                    padding: 15,
                    flexDirection: "row",
                    borderRadius: 99,
                    borderWidth: 5,
                    borderColor: colors.text_inverted,
                    backgroundColor: `rgba(${item.icon.color}, ${item.icon.opacity})`,
                    borderRightColor: `rgba(${item.icon.color},1)`,
                    transform: [{ rotate: "-45deg" }],
                  }}
                >
                  <item.icon.icon
                    width={24}
                    height={24}
                    color={colors.text}
                    style={{
                      transform: [{ rotate: "45deg" }],
                    }}
                  />
                </View>
                <Text
                  style={{ fontSize: 38, color: colors.text, fontWeight: 600 }}
                >
                  {item.value}
                </Text>
                <Text
                  style={{ color: colors.text, fontSize: 24, marginTop: 5 }}
                >
                  {item.title}
                </Text>
                <Text style={{ color: "gray", fontSize: 17 }}>{item.desc}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
}
