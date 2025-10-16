import { Image, Text, TouchableOpacity, View } from "react-native";
import { Theme } from "../utils/themes/Theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ArrowRightToLine, FastForward } from "lucide-react-native";
import DOCTOR1 from "../utils/images/DOCTOR1";
import DOCTOR2 from "../utils/images/DOCTOR2";
import DOCTOR3 from "../utils/images/DOCTOR3";
import DOCTOR_LIGHT_1 from "../assets/doctor1.png";
import DOCTOR_LIGHT_2 from "../assets/doctor2.png";
import DOCTOR_LIGHT_3 from "../assets/doctor3.png";

export function Welcome(props: Theme) {
  const { theme, colors } = props;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.bg,
        padding: 30,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <FastForward
          color={colors.blue}
          onPress={() => navigation.navigate("login")}
          style={{
            marginBottom: "-5%",
            zIndex: 99,
          }}
        />

        {theme == "dark" ? (
          <DOCTOR1 />
        ) : (
          <Image
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            source={DOCTOR_LIGHT_1}
          />
        )}

        <Text
          style={{
            fontSize: 52,
            color: colors.text,
            bottom: 0,
            position: "absolute",
            fontWeight: "bold",
            marginBottom: 20,
            width: "90%",
          }}
        >
          Your health made simple
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("two")}
          style={{
            position: "absolute",
            bottom: 10,
            right: 0,
            backgroundColor: colors.bg_inverted,
            borderRadius: 999,
            padding: 10,
          }}
        >
          <ArrowRightToLine color={colors.text_inverted} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export function WelcomeTwo(props: Theme) {
  const { theme, colors } = props;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.bg,
        padding: 30,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <FastForward
          color={colors.blue}
          onPress={() => navigation.navigate("login")}
          style={{
            marginBottom: "-5%",
            zIndex: 99,
          }}
        />

        <Text
          style={{
            fontSize: 52,
            color: colors.text,
            top: "10%",
            position: "absolute",
            fontWeight: "bold",
            marginBottom: 20,
            width: "90%",
          }}
        >
          Tailored care for your unique needs!
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("three")}
          style={{
            position: "absolute",
            top: "20%",
            right: 0,
            backgroundColor: colors.bg_inverted,
            borderRadius: 999,
            padding: 10,
            zIndex: 99,
          }}
        >
          <ArrowRightToLine color={colors.text_inverted} />
        </TouchableOpacity>

        {theme == "dark" ? (
          <DOCTOR2 style={{ position: "absolute", bottom: "-20%" }} />
        ) : (
          <Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
              position: "absolute",
              bottom: "-20%",
            }}
            source={DOCTOR_LIGHT_2}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

export function WelcomeThree(props: Theme) {
  const { theme, colors } = props;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.bg,
        display: "flex",
        padding: 30,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          color: colors.text,
          fontSize: 52,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Let's beat drug addiction together!
      </Text>

      <View style={{ width: "100%", height: "50%" }}>
        {theme == "dark" ? (
          <DOCTOR3 />
        ) : (
          <Image
            source={DOCTOR_LIGHT_3}
            style={{ resizeMode: "contain", width: "100%", height: "100%" }}
          />
        )}
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: colors.bg_inverted,
          width: "90%",
          paddingVertical: 20,
          zIndex: 999,
          borderRadius: 999,
        }}
        onPress={() => navigation.navigate("login")}
        activeOpacity={0.7}
      >
        <Text
          style={{
            color: colors.text_inverted,
            textAlign: "center",
            fontSize: 25,
            fontWeight: "semibold",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
