import {
  Image,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { Theme } from "../utils/themes/Theme";
import { CurveType, LineChart } from "react-native-gifted-charts";
import { Leaf, Pill, Sun } from "lucide-react-native";

export default function Progress(props: Theme) {
  const { width, height } = useWindowDimensions();
  const { colors, theme } = props;
  const lineData = [
    { value: 0, dataPointText: "0" },
    { value: 20, dataPointText: "20" },
    { value: 18, dataPointText: "18" },
    { value: 40, dataPointText: "40" },
    { value: 36, dataPointText: "36" },
    { value: 60, dataPointText: "60" },
    { value: 54, dataPointText: "54" },
    { value: 85, dataPointText: "85" },
    { value: 65, dataPointText: "65" },
    { value: 15, dataPointText: "15" },
    { value: 95, dataPointText: "95" },
    { value: 102, dataPointText: "102" },
    { value: 25, dataPointText: "25" },
  ];
  const medicine = [
    { value: 20, dataPointText: "20" },
    { value: 16, dataPointText: "16" },
    { value: 14, dataPointText: "14" },
    { value: 12, dataPointText: "12" },
    { value: 9, dataPointText: "9" },
    { value: 8, dataPointText: "8" },
  ];
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.bg, padding: 30 }}>
      <Text style={{ color: colors.text, fontSize: 44, fontWeight: 700 }}>
        Your Progress
      </Text>

      <View style={{ width: "100%", marginVertical: 20, overflow: "hidden" }}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Leaf color={colors.text} size={32} />
          <Text
            style={{
              fontSize: 24,
              color: colors.text,
              fontWeight: 500,
              marginLeft: 5,
            }}
          >
            Meditation
          </Text>
        </View>
        <ScrollView horizontal style={{ marginTop: 20 }}>
          <LineChart
            initialSpacing={0}
            data={lineData}
            spacing={40}
            showArrows
            textColor1={theme == "dark" ? "#FFCC00" : colors.text}
            textShiftY={-8}
            textShiftX={-10}
            textFontSize={13}
            thickness={3}
            hideRules
            hideYAxisText
            yAxisColor={theme == "dark" ? "#FFCC00" : colors.bg_inverted}
            showVerticalLines
            verticalLinesColor="rgba(14,164,164,0.3)"
            xAxisColor={theme == "dark" ? "#FFCC00" : colors.bg_inverted}
            color="green"
            isAnimated
          />
        </ScrollView>
      </View>

      <View style={{ width: "100%", marginVertical: 20, overflow: "hidden" }}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Sun color={colors.text} size={32} />
          <Text
            style={{
              fontSize: 24,
              color: colors.text,
              fontWeight: 500,
              marginLeft: 5,
            }}
          >
            Sunlight
          </Text>
        </View>
        <ScrollView horizontal style={{ marginTop: 20 }}>
          <LineChart
            initialSpacing={0}
            data={lineData}
            spacing={40}
            showArrows
            textShiftY={-8}
            textColor1={theme == "dark" ? "#FFCC00" : colors.text}
            textShiftX={-10}
            textFontSize={13}
            thickness={3}
            hideRules
            hideYAxisText
            yAxisColor={theme == "dark" ? "#FFCC00" : colors.bg_inverted}
            showVerticalLines
            verticalLinesColor="rgba(14,164,164,0.3)"
            xAxisColor={theme == "dark" ? "#FFCC00" : colors.bg_inverted}
            color="#0BA5A4"
            isAnimated
          />
        </ScrollView>
      </View>

      <View style={{ width: "100%", marginVertical: 20, overflow: "hidden" }}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Pill color={colors.text} size={32} />
          <Text
            style={{
              fontSize: 24,
              color: colors.text,
              fontWeight: 500,
              marginLeft: 5,
            }}
          >
            Medicines
          </Text>
        </View>
        <ScrollView horizontal style={{ marginTop: 20, marginBottom: 50 }}>
          <LineChart
            initialSpacing={0}
            data={medicine}
            spacing={40}
            showArrows
            textColor1={theme == "dark" ? "#FFCC00" : colors.text}
            textShiftY={-8}
            textShiftX={-10}
            textFontSize={13}
            thickness={3}
            hideRules
            hideYAxisText
            yAxisColor={theme == "dark" ? "#FFCC00" : colors.bg_inverted}
            showVerticalLines
            verticalLinesColor="rgba(14,164,164,0.3)"
            xAxisColor={theme == "dark" ? "#FFCC00" : colors.bg_inverted}
            color="purple"
            isAnimated
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
}
