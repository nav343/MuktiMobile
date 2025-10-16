import { Text, TouchableOpacity, View } from "react-native";
import { X } from "lucide-react-native";
import MoodPopup from "./MoodPopup";
import { Mood, MoodElement } from "../types/Types";

export default function ChooseMood(props: MoodElement) {
  const {
    colors,
    moodOpen,
    setMoodOpen,
    theme,
    setTheme,
    setMood,
    selectedMood,
  } = props;

  const MoodData: Mood[][] = [
    [
      { icon: "😀", mood: "happy" },
      { icon: "🙂", mood: "smile" },
      { icon: "😇", mood: "peace" },
      { icon: "🙁", mood: "thoughtfully_sad" },
    ],
    [
      { icon: "😔", mood: "thoughtfully_pensive" },
      { icon: "😞", mood: "pensive" },
      { icon: "😫", mood: "guilty" },
      { icon: "😡", mood: "angry" },
    ],
  ];
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

      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 999,
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        <View
          style={{
            backgroundColor: colors.bg_inverted,
            width: "90%",
            height: "70%",
            borderRadius: 30,
            padding: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <X
            style={{ position: "absolute", top: 20, left: 20 }}
            fontSize={20}
            color={colors.text_inverted}
            onPress={() => setMoodOpen(!moodOpen)}
          />
          <Text
            style={{
              color: colors.text_inverted,
              textAlign: "center",
              fontSize: 30,
              fontWeight: 600,
              marginBottom: 30,
            }}
          >
            Choose your mood today!
          </Text>

          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              {MoodData[0].map((data) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{
                    backgroundColor: colors.tile,
                    padding: 20,
                    borderRadius: 20,
                    margin: 5,
                  }}
                  onPress={() => setMood({ mood: data.mood, icon: data.icon })}
                >
                  <Text style={{ fontSize: 40 }}>{data.icon}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={{ display: "flex", flexDirection: "row" }}>
              {MoodData[1].map((data) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{
                    backgroundColor: colors.tile,
                    padding: 20,
                    borderRadius: 20,
                    margin: 5,
                  }}
                  onPress={() => setMood({ mood: data.mood, icon: data.icon })}
                >
                  <Text style={{ fontSize: 40 }}>{data.icon}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
