import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { Theme } from "../utils/themes/Theme";
import { ArrowLeft, BellRing } from "lucide-react-native";
import { useState } from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function Notifications(props: Theme) {
  const { colors } = props;
  const [activeNotif, setActiveNotif] = useState<boolean>(true);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.bg,
        flex: 1,
        padding: 30,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
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
            Notifications
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
        </View>
      </View>

      <View style={{ width: "100%", display: "flex", alignItems: "center" }}>
        <Text style={{ color: colors.text, fontSize: 30, fontWeight: 300 }}>
          You are all up to date!!
        </Text>
      </View>

      <View />
    </SafeAreaView>
  );
}
