import * as Clipboard from "expo-clipboard";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Platform,
  Modal,
  Share,
} from "react-native";
import { Theme } from "../utils/themes/Theme";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Bot,
  BotMessageSquare,
  Camera,
  Check,
  CircleUserRound,
  Copy,
  EllipsisVertical,
  Flag,
  Loader,
  Pencil,
  RefreshCcw,
  ShareIcon,
  ThumbsDown,
  ThumbsUp,
  X,
} from "lucide-react-native";
import { useEffect, useRef, useState } from "react";
import { ChatData, ModalOptions } from "../types/Types";

function random(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addChat() {
  const [chat, setChat] = useState<ChatData[]>([
    {
      id: 0,
      type: "ai",
      msg: "Hello Nav343!. Welcome",
      timestamp: "12/1/2025",
    },
  ]);

  const replies = [
    "Hello, how are you!",
    "Oh i see. good ig",
    "BYE",
    "NICE NICE> KEEP IT UP",
    "IM STILL UNDER CONSTRUCTION YOU KNOW",
  ];

  useEffect(() => {
    if (chat[chat.length - 1].type != "ai") {
      setTimeout(() => {
        setChat([
          ...chat,
          {
            id: chat[chat.length - 1].id + 1,
            type: "ai",
            msg: replies[random(0, replies.length - 1)],
            timestamp: "12/13/2025",
          },
        ]);
      }, 1000);
    }
  }, [chat]);

  return { chat, setChat };
}

export default function NewChat(props: Theme) {
  const { colors } = props;
  const [chatValue, setChatValue] = useState<string>("");
  const { chat, setChat } = addChat();
  const scrollViewRef = useRef(null);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ChatData>();

  const UserOptions: ModalOptions[] = [
    {
      icon: Pencil,
      title: "Edit",
      onPress: () => console.log("Edit"),
    },
    {
      icon: Pencil,
      title: "Delete",
      onPress: () => console.log("Delete"),
    },
  ];

  const AiOptions: ModalOptions[] = [
    {
      title: "Good Response",
      icon: ThumbsUp,
      onPress: () => console.log("Good Response"),
    },
    {
      title: "Bad Response",
      icon: ThumbsDown,
      onPress: () => console.log("Bad Response"),
    },

    {
      title: "Try again",
      icon: RefreshCcw,
      onPress: () => console.log("Try again"),
    },
    {
      title: "Share",
      icon: ShareIcon,
      onPress: () => Share.share({ message: modalData?.msg as string }),
    },
  ];

  const ModalOptions: ModalOptions[] = [
    {
      title: "Copy",
      icon: Copy,
      onPress: () =>
        Clipboard.setStringAsync(modalData?.msg as string).then(() =>
          setModalVisible(!modalVisible),
        ),
    },
    ...(modalData?.type == "ai" ? AiOptions : UserOptions),
    {
      title: "Report",
      icon: Flag,
      onPress: () => console.log("Report"),
    },
  ];

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.bg,
        flex: 1,
      }}
    >
      {modalData != undefined ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          allowSwipeDismissal
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
          statusBarTranslucent
        >
          <TouchableOpacity
            style={{
              width: "100%",
              height: "100%",
              opacity: 0.8,
              backgroundColor: colors.bg,
            }}
            onPressIn={() => setModalVisible(!modalVisible)}
          />
          <View
            style={{
              position: "absolute",
              backgroundColor: colors.tile,
              bottom: 0,
              width: "100%",
              borderTopStartRadius: 30,
              maxHeight: "50%",
              borderTopEndRadius: 30,
              display: "flex",
              paddingVertical: 20,
              paddingHorizontal: 30,
              paddingTop: 40,
            }}
          >
            <X
              style={{ position: "absolute", top: 15, right: 15 }}
              onPress={() => setModalVisible(!modalVisible)}
              color={colors.text}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
              {ModalOptions.map((item) => (
                <TouchableOpacity
                  onPress={item.onPress}
                  activeOpacity={0.8}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginVertical: 20,
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
                      color={
                        item.title == "Report" || item.title == "Delete"
                          ? "red"
                          : colors.text
                      }
                      size={30}
                    />
                    <Text
                      style={{
                        color:
                          item.title == "Report" || item.title == "Delete"
                            ? "red"
                            : colors.text,
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
          </View>
        </Modal>
      ) : (
        ""
      )}

      <View
        style={{
          padding: 30,
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
            justifyContent: "center",
          }}
        >
          <BotMessageSquare
            color={colors.text}
            style={{ width: 20, height: 20, padding: 25 }}
          />
          <Text
            style={{
              fontSize: 30,
              marginLeft: 7,
              fontWeight: 700,
              color: colors.text,
            }}
          >
            Mukti Ai
          </Text>
        </View>

        <EllipsisVertical
          color={colors.text}
          style={{ width: 20, height: 20, padding: 15 }}
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          flex: 1,
          paddingHorizontal: 30,
          paddingVertical: 20,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}
      >
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() => {
            (scrollViewRef.current as any).scrollToEnd({ animated: true });
          }}
          style={{
            flex: 1,
          }}
          contentContainerStyle={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {chat.map((data) => (
            <>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignSelf: data.type == "user" ? "flex-end" : "flex-start",
                  marginBottom: 15,
                  alignItems: "center",
                }}
              >
                {data.type == "ai" ? (
                  <Bot color={colors.text} style={{ marginRight: 5 }} />
                ) : (
                  <></>
                )}
                <TouchableOpacity
                  key={data.id}
                  activeOpacity={0.7}
                  onLongPress={() => {
                    setModalVisible(!modalVisible);
                    setModalData({
                      id: data.id,
                      type: data.type,
                      msg: data.msg,
                      timestamp: data.timestamp,
                    });
                  }}
                  style={{
                    padding: 20,
                    borderRadius: 30,
                    borderTopRightRadius: data.type == "user" ? 0 : 30,
                    borderTopLeftRadius: data.type == "ai" ? 0 : 30,
                    backgroundColor: colors.tile,
                  }}
                >
                  <Text
                    style={{
                      color: colors.text,
                      fontSize: 18,
                      fontWeight: 400,
                    }}
                  >
                    {data.msg}
                  </Text>
                </TouchableOpacity>

                {data.type == "user" ? (
                  <CircleUserRound
                    color={colors.text}
                    style={{ marginLeft: 5 }}
                  />
                ) : (
                  <></>
                )}
              </View>
            </>
          ))}
        </ScrollView>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View
            style={{
              backgroundColor: colors.tile,
              padding: 10,
              borderRadius: 99,
            }}
          >
            <Camera color={colors.text} />
          </View>
          <TextInput
            multiline
            placeholder="Reply"
            placeholderTextColor={colors.text}
            style={{
              backgroundColor: colors.tile,
              color: colors.text,
              marginRight: 15,
              marginLeft: 10,
              borderRadius: 20,
              paddingHorizontal: 20,
              paddingVertical: 15,
              fontSize: 18,
              flex: 1,
            }}
            value={chatValue}
            onChangeText={(e) => {
              setChatValue(e);
            }}
          />
          <TouchableOpacity
            onPress={() => {
              if (chatValue.trim().length != 0) {
                setChat([
                  ...chat,
                  {
                    id: chat[chat.length - 1].id + 1,
                    type: "user",
                    msg: chatValue.trim(),
                    timestamp: "12/13/2025",
                  },
                ]);
                setChatValue("");
              }
              setDisabled(true);
              setTimeout(() => {
                setDisabled(false);
              }, 1000);
            }}
            disabled={disabled}
            activeOpacity={0.7}
            style={{
              padding: 10,
              borderRadius: 99,
              backgroundColor: colors.tile,
            }}
          >
            {!disabled ? (
              <Check color={colors.text} />
            ) : (
              <Loader color={colors.text} />
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
