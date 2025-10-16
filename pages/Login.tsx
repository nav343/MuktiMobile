import { SafeAreaView } from "react-native-safe-area-context";
import { Theme } from "../utils/themes/Theme";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Image,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import LOGIN from "../assets/login.png";
import { Eye, EyeOff, Lock, UserStarIcon } from "lucide-react-native";
import LOGINIMAGE from "../utils/images/LOGIN_IMAGE";

/**
export default function Login(props: Theme) {
  const { theme, colors } = props;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 30,
        backgroundColor: colors.bg,
      }}
    >
      <Text style={{ color: colors.text, fontSize: 52, fontWeight: "bold" }}>
        Login
      </Text>

      <View
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 60,
        }}
      >
        <TextInput
          placeholder="Name"
          onChangeText={(txt) => setName(txt)}
          style={{
            color: "#03001c",
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#03001c",
            width: "90%",
            paddingHorizontal: 20,
            paddingVertical: 20,
            fontSize: 20,
          }}
          placeholderTextColor={"#03001c"}
        />

        <TextInput
          placeholder="Email"
          onChangeText={(txt) => setEmail(txt)}
          style={{
            color: "#03001c",
            borderRadius: 10,
            marginVertical: 10,
            borderWidth: 2,
            borderColor: "#03001c",
            width: "90%",
            paddingHorizontal: 20,
            paddingVertical: 20,
            fontSize: 20,
          }}
          placeholderTextColor={"#03001c"}
        />

        <TextInput
          placeholder="Password"
          onChangeText={(txt) => setPassword(txt)}
          style={{
            color: "#03001c",
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#03001c",
            width: "90%",
            paddingHorizontal: 20,
            paddingVertical: 20,
            fontSize: 20,
          }}
          placeholderTextColor={"#03001c"}
        />
      </View>

      <View
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            padding: 20,
            borderRadius: 10000,
            width: "90%",
            backgroundColor: "#FF9B00",
          }}
          onPress={() => {
            console.log(name, email, password);
            navigation.navigate("home");
          }}
        >
          <Text
            style={{
              color: colors.text,
              fontSize: 28,
              textAlign: "center",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: colors.text,
            fontSize: 18,
            marginTop: 5,
          }}
        >
          Dont have an account?{" "}
          <Text
            style={{
              color: colors.blue,
            }}
            onPress={() => navigation.navigate("signup")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
**/

export default function Login(props: Theme) {
  const { theme, colors } = props;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPass, setShowPass] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(false);

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.bg,
        width: "100%",
        height: "100%",
        padding: 20,
      }}
    >
      {theme === "dark" ? (
        <LOGINIMAGE />
      ) : (
        <Image
          source={LOGIN}
          style={{
            width: "95%",
            height: "45%",
          }}
        />
      )}

      <View style={{ paddingHorizontal: 5 }}>
        <Text
          style={{
            color: colors.text,
            fontSize: 54,
            fontWeight: 500,
          }}
        >
          Login
        </Text>
        <Text
          style={{
            color: colors.text,
            fontSize: 18,
            fontWeight: 400,
            marginVertical: 5,
          }}
        >
          Please sign in to continue
        </Text>

        <View
          style={{
            marginHorizontal: 10,
            marginTop: 10,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 999,
            backgroundColor: theme == "light" ? "#edebeb" : "#03001c",
            borderWidth: theme == "light" ? 1 : 2,
            borderColor: "white",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <UserStarIcon size={20} color={colors.text} />
          <TextInput
            style={{
              fontSize: 20,
              marginLeft: 10,
              fontWeight: 300,
              width: "100%",
            }}
            onChangeText={(txt) => setName(txt)}
            placeholder="Username"
            placeholderTextColor={colors.text}
          />
        </View>

        <View
          style={{
            marginHorizontal: 10,
            marginTop: 10,
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: theme == "light" ? "#edebeb" : "#03001c",
            borderWidth: theme == "light" ? 1 : 2,
            borderColor: "white",
            borderRadius: 999,
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              paddingRight: 5,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Lock size={20} color={colors.text} />
              <TextInput
                style={{
                  fontSize: 20,
                  marginLeft: 10,
                  fontWeight: 300,
                  width: "90%",
                }}
                placeholder="Password"
                secureTextEntry={!showPass}
                value={password}
                onChangeText={(txt) => setPassword(txt)}
                placeholderTextColor={colors.text}
              />
            </View>

            <TouchableOpacity onPress={() => setShowPass(!showPass)}>
              {showPass ? (
                <Eye size={18} color={colors.text} fontWeight={100} />
              ) : (
                <EyeOff size={18} color={colors.text} fontWeight={100} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 30,
            marginVertical: 10,
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 15, color: colors.text }}>
            Remember me next time
          </Text>
          <Switch
            trackColor={
              theme == "light"
                ? { false: "#edebeb", true: "#03001c" }
                : { false: "white", true: "gray" }
            }
            thumbColor={
              theme == "light"
                ? remember
                  ? "white"
                  : "#03001c"
                : remember
                  ? "white"
                  : "gray"
            }
            onValueChange={() => setRemember(!remember)}
            value={remember}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("home")}
          style={{
            marginHorizontal: 10,
            backgroundColor: colors.bg_inverted,
            borderRadius: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: colors.text_inverted,
              fontSize: 20,
              fontWeight: 500,
              marginVertical: 20,
            }}
          >
            Log in
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            color: theme == "light" ? "#697565" : "white",
            fontSize: 18,
            marginTop: 5,
            textAlign: "center",
          }}
        >
          Dont have an account?{" "}
          <Text
            style={{
              color: theme == "light" ? colors.text : "gray",
            }}
            onPress={() => navigation.navigate("signup")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
