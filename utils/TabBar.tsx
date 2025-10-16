import { View } from "react-native";
import { useLinkBuilder } from "@react-navigation/native";
import { Text, PlatformPressable } from "@react-navigation/elements";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Theme } from "./themes/Theme";
import {
  BotMessageSquareIcon,
  BowArrow,
  LayoutGrid,
  SettingsIcon,
  Siren,
} from "lucide-react-native";

interface TabBarProps extends BottomTabBarProps, Theme {}

export function TabBar({
  state,
  descriptors,
  navigation,
  colors,
}: TabBarProps) {
  const { buildHref } = useLinkBuilder();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: colors.bg_inverted,
        marginHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 999,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            id={Math.random().toString()}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            {route.name == "Dashboard" ? (
              <View
                id={Math.random().toString()}
                style={{
                  backgroundColor: "#DC2525",
                  padding: 20,
                  borderRadius: 999,
                  position: "absolute",
                  top: "-80%",
                  shadowColor: !isFocused ? colors.bg : colors.bg_inverted,
                  shadowOffset: { width: 5, height: 5 },
                  shadowOpacity: 0.5,
                  shadowRadius: 10,
                  elevation: 10,
                }}
              >
                <LayoutGrid size={40} color={"white"} />
              </View>
            ) : route.name == "Chat" ? (
              <BotMessageSquareIcon
                id={Math.random().toString()}
                color={isFocused ? colors.text_inverted : "gray"}
              />
            ) : route.name == "Progress" ? (
              <BowArrow
                color={isFocused ? colors.text_inverted : "gray"}
                id={Math.random().toString()}
              />
            ) : route.name == "Emergency" ? (
              <Siren
                color={isFocused ? colors.text_inverted : "#DC2525"}
                id={Math.random().toString()}
              />
            ) : (
              <SettingsIcon
                color={isFocused ? colors.text_inverted : "gray"}
                id={Math.random().toString()}
              />
            )}
            {route.name != "Dashboard" ? (
              <Text
                id={Math.random().toString()}
                style={{
                  color: isFocused ? colors.text_inverted : "gray",
                }}
              >
                {label as any}
              </Text>
            ) : (
              <></>
            )}
          </PlatformPressable>
        );
      })}
    </View>
  );
}
