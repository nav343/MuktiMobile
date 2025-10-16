import { ParamListBase, useNavigation } from "@react-navigation/native";
import { Theme } from "../utils/themes/Theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import {
  Bell,
  Cookie,
  Lock,
  LogOut,
  Mail,
  MessageCircleHeart,
  Moon,
  ScrollText,
  Share2,
  Star,
  Sun,
  Trash2,
  UserPen,
} from "lucide-react-native";
import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SettingItems } from "../types/Types";

export default function Settings(props: Theme) {
  const { theme, setTheme, colors } = props;
  const [notif, setNotif] = useState<boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const settings: SettingItems[] = [
    {
      icon: Bell,
      title: "Notification",
      onPress: () => setNotif(!notif),
      children: (
        <Switch
          trackColor={
            theme == "light"
              ? { false: "#edebeb", true: "#03001c" }
              : { false: "white", true: "gray" }
          }
          thumbColor={
            theme == "light"
              ? notif
                ? "white"
                : "#03001c"
              : notif
                ? "white"
                : "gray"
          }
          onValueChange={() => setNotif(!notif)}
          value={notif}
        />
      ),
    },
    {
      icon: UserPen,
      title: "Profile",
      onPress: () => console.log("Profile"),
    },
    {
      icon: theme == "light" ? Moon : Sun,
      title: (theme == "light" ? "Dark" : "Light") + " Theme",
      onPress: () => setTheme(theme == "light" ? "dark" : "light"),
    },
    {
      icon: Star,
      title: "Rate App",
      onPress: () => console.log("Rate app"),
    },
    {
      icon: Share2,
      title: "Share App",
      onPress: () => console.log("Share App"),
    },
    {
      icon: Lock,
      title: "Privacy Policy",
      onPress: () => console.log("Privacy Policy"),
    },
    {
      icon: ScrollText,
      title: "Terms and Conditions",
      onPress: () => console.log("Terms and Condtions"),
    },
    {
      icon: Cookie,
      title: "Cookies Policy",
      onPress: () => console.log("Cookiees Policy"),
    },
    {
      icon: Mail,
      title: "Contact",
      onPress: () => console.log("Contact"),
    },
    {
      icon: MessageCircleHeart,
      title: "Feedbacks",
      onPress: () => console.log("Feedbacks"),
    },
    {
      icon: LogOut,
      title: "Logout",
      onPress: () => navigation.navigate("login"),
    },
    {
      icon: Trash2,
      title: "Delete Account",
      onPress: () => console.log("Delete account"),
    },
  ];

  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.bg,
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 48,
          color: colors.text,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Settings
      </Text>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        {settings.map((item, id) => (
          <TouchableOpacity
            onPress={item.onPress}
            activeOpacity={0.8}
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              marginVertical: 25,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <item.icon
                color={id == 10 || id == 11 ? "red" : colors.text}
                size={30}
              />
              <Text
                style={{
                  color: id == 10 || id == 11 ? "red" : colors.text,
                  marginLeft: 10,
                  fontSize: 20,
                }}
              >
                {item.title}
              </Text>
            </View>
            {item.children}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
