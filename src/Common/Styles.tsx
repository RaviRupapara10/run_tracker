import { StyleSheet } from "react-native";
import { useTheme } from "./Theme/ThemeType";


export const { colors } = useTheme();


export const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
  },
  weeks: {
    height: 60,
    width: 95,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  },
  whiperText: {
    fontFamily: "BebasNeue-Regular",
    fontWeight: "700",
    fontSize: 18,
    paddingTop: 3,
  },
});