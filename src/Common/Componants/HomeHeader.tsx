import { Text, View } from "react-native";
import { colors, styles } from "../Styles";
import MyBtn from "../MyBtn";
import { calander } from "../../../constants/icons";

export const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <Text
        style={{
          fontWeight: "900",
          letterSpacing: -0.3,
          textAlign: "left",
          fontFamily: "Roboto-Black",
          fontSize: 22,
          lineHeight: 26,
          color: colors.darkbackground,
          flex: 1,
          textTransform: "uppercase",
        }}
      >
        Running
      </Text>
      <MyBtn source={calander} />
    </View>
  );
};
