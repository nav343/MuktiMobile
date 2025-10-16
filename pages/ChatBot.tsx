import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Theme } from "../utils/themes/Theme";
import AI from "../assets/muktiai.png";
import {
  CornerUpRight,
  Lightbulb,
  MessageSquareText,
  PencilLine,
  Sprout,
} from "lucide-react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function ChatBot(props: Theme) {
  const { colors } = props;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const ChatHistory = [
    "Give me ideas for writing a movie script",
    "I have a mild headache, what should I do?",
    "I am planning to go on a vacation, have any suggestions?",
    "Suggest some free courses for Coding",
    "I am looking to buy a laptop, suggest some good ones that are cheap",
  ];
  return (
    <ScrollView
      style={{
        backgroundColor: colors.bg,
        padding: 30,
        flex: 1,
      }}
      contentContainerStyle={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "#3DC2EC",
          display: "flex",
          width: "100%",
          marginVertical: 20,
          borderRadius: 30,
          paddingVertical: 40,
          paddingHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <View style={{ width: "78%" }}>
          <Text
            style={{
              color: colors.text_inverted,
              fontWeight: 900,
              fontSize: 40,
            }}
          >
            MuktiAI
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: colors.text_inverted,
              fontWeight: 500,
            }}
          >
            Hey Nav343!!. What's going on today?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("chat")}
            activeOpacity={0.7}
            style={{
              marginTop: 30,
              marginVertical: 10,
              borderRadius: 20,
              backgroundColor: colors.bg,
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              paddingVertical: 20,
              paddingHorizontal: 10,
            }}
          >
            <PencilLine color={colors.text} />
            <Text style={{ color: colors.text, fontSize: 18, marginLeft: 10 }}>
              New Chat
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40%",
            height: "10%",
            transform: [{ rotate: "-30deg" }],
            paddingTop: 40,
          }}
        >
          <Image source={AI} />
        </View>
      </View>

      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: colors.tile,
            padding: 30,
            paddingVertical: 50,
            borderRadius: 20,
            borderBottomColor: "#FFCC00",
            borderLeftColor: "#FFCC00",
            borderLeftWidth: 1,
            borderBottomWidth: 1,
            display: "flex",
            alignItems: "flex-start",
            width: "45%",
          }}
        >
          <View
            style={{
              padding: 15,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10000,
              borderColor: "#3DC2EC",
              borderWidth: 2,
              marginBottom: 10,
            }}
          >
            <Lightbulb color={"#3DC2EC"} fontSize={30} />
          </View>
          <Text
            style={{
              color: colors.text,
              fontSize: 20,
              marginTop: 4,
              fontWeight: 200,
            }}
          >
            Generate ideas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: colors.tile,
            marginLeft: 20,
            padding: 30,
            borderBottomColor: "#FFCC00",
            borderLeftColor: "#FFCC00",
            borderLeftWidth: 1,
            borderBottomWidth: 1,
            borderRadius: 20,
            paddingVertical: 50,
            display: "flex",
            alignItems: "flex-start",
            width: "45%",
          }}
        >
          <View
            style={{
              padding: 15,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10000,
              borderColor: "#3DC2EC",
              borderWidth: 2,
              marginBottom: 10,
            }}
          >
            <Sprout color={"#3DC2EC"} fontSize={30} />
          </View>
          <Text
            style={{
              color: colors.text,
              fontSize: 20,
              marginTop: 4,
              fontWeight: 200,
            }}
          >
            Generate image
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ width: "100%", marginTop: 30, marginBottom: 80 }}>
        <Text style={{ fontSize: 38, fontWeight: 500, color: colors.text }}>
          History
        </Text>

        <ScrollView
          style={{
            marginTop: 10,
          }}
        >
          {ChatHistory.map((data) => (
            <TouchableOpacity
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                marginVertical: 5,
                backgroundColor: colors.tile,
                padding: 20,
                borderRadius: 20,
              }}
              activeOpacity={0.7}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 10,
                }}
              >
                <MessageSquareText color={colors.text} fontSize={30} />
                <Text
                  style={{ color: colors.text, marginLeft: 10, fontSize: 18 }}
                >
                  {data.slice(0, 40)}......
                </Text>
              </View>
              <CornerUpRight color={colors.text} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text
          style={{
            color: colors.text,
            fontSize: 18,
            fontWeight: 700,
            textAlign: "center",
            marginTop: 5,
          }}
        >
          See all...
        </Text>
      </View>
    </ScrollView>
  );
}
