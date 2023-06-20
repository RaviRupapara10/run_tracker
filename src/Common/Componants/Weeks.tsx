import { Pressable, ScrollView, Text, View } from "react-native";
import { colors, styles } from "../Styles";
import { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { FONTS } from "../../../constants";

export const Weeks = ({ data, onWeekChange }:any) => {

  // type weekData = {
  //   'isWeekComplete': number,
  //   "weekName": number,
  // }


  const [selectedWeek, setSelectedWeek] = useState(1)


  const onSelectedWeek = (props: any) => {
    setSelectedWeek(props)
    onWeekChange && onWeekChange(props)

  }


  return (
    <View style={{ paddingVertical: 5 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((a:any, i:any) =>
          <Pressable  onPress={() => onSelectedWeek(a.weekName)} key={i}>
            <LinearGradient
              locations={[0.0, 1.0]}
              colors={a.isWeekComplete ? [`${colors.grade1}`, `${colors.grade2}`] : ['white', 'white']}
              style={[styles.weeks, { backgroundColor: colors.background, borderWidth: 2, borderColor: a.weekName == selectedWeek ? colors.primary : colors.gray2 }]}
            >
              <Text
                style={{
                  ...FONTS.HomeCard,
                  color: colors.darkbackground,
                }}
              >
                Week {a.weekName}
              </Text>
            </LinearGradient>
          </Pressable>
        )}


      </ScrollView>
    </View>
  );
};
