import { LucideIcon } from "lucide-react-native";
import { Theme } from "../utils/themes/Theme";
import { ReactElement } from "react";

export interface Mood {
  icon: string;
  mood: string;
}
export interface MoodPopupProps extends Theme {
  mood: Mood;
  setMood: React.Dispatch<React.SetStateAction<Mood>>;
}

export interface MoodElement extends Theme, MoodPopupProps {
  moodOpen: boolean;
  selectedMood: Mood;
  setMoodOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ChatData {
  id: number;
  type: "user" | "ai";
  msg: string;
  timestamp: string;
}

export interface SettingItems {
  icon: LucideIcon;
  title: string;
  onPress: () => void;
  children?: ReactElement;
}

export interface ModalOptions extends SettingItems {}
export interface GridItems extends SettingItems {}
