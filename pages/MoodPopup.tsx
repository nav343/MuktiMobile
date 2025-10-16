import { Text, TouchableOpacity, View } from "react-native";
import { MoodPopupProps } from "../types/Types";

const MoodQuotes = {
  happy: {
    mood: "happy",
    quote:
      "Enjoy the little things in life, for one day you may look back and realize they were the big things.",
    author: "Robert Brault",
  },
  smile: {
    mood: "smile",
    quote:
      "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
    author: "Marilyn Monroe",
  },
  peace: {
    mood: "peace",
    quote: "Peace is not the absence of chaos, but the presence of clarity.",
    author: "Unknown",
  },
  thoughtfully_sad: {
    mood: "thoughtfully_sad",
    quote: "Stars can’t shine without darkness.",
    author: "D.H. Sidebottom",
  },
  pensive: {
    mood: "pensive",
    quote: "Don’t be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  extremely_pensive: {
    mood: "extremely_pensive",
    quote:
      "Rock bottom became the solid foundation on which I rebuilt my life.",
    author: "J.K. Rowling",
  },
  guilty: {
    mood: "guilty",
    quote:
      "You can't go back and change the beginning, but you can start where you are and change the ending.",
    author: "C.S. Lewis",
  },
  angry: {
    mood: "angry",
    quote:
      "Holding onto anger is like drinking poison and expecting the other person to die.",
    author: "Buddha",
  },
};

export default function MoodPopup(props: MoodPopupProps) {
  const { theme, colors, mood, setMood } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => setMood({ mood: "", icon: "" })}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        backgroundColor:
          theme == "dark" ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)",
      }}
    >
      <View
        style={{
          backgroundColor: colors.bg_inverted,
          width: "70%",
          height: "50%",
          borderRadius: 30,
          padding: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 80, marginBottom: 5 }}>{mood.icon}</Text>

        <Text
          style={{
            marginTop: 10,
            fontWeight: 400,
            fontSize: 24,
            textAlign: "center",
            color: colors.text_inverted,
          }}
        >
          "{(MoodQuotes[mood.mood as never] as any).quote}"
        </Text>
        <Text
          style={{
            marginLeft: 5,
            fontWeight: 300,
            fontSize: 20,
            color: colors.text_inverted,
          }}
        >
          - {(MoodQuotes[mood.mood as never] as any).author}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
