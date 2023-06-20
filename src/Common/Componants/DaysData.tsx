
import { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { FONTS } from "../../../constants";
import { Right } from "../../../constants/icons";
import { UserType } from "../userModel";
import { Image, Pressable, Text, View } from "react-native";
import { colors } from "../Styles";

export const DaysData = (props: any) => {



  const [curruntDay, setCurruntDay] = useState(1)

  const selectedDay = (id: any) => {
    setCurruntDay(id)
    props.onSelectedDays(id)
    console.log(id);
    
  }

  const Circle = (props: any) => {
    return (
      <View style={{ padding: 5 }}>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              height: 32,
              width: 32,
              borderWidth: 3,
              borderColor: colors.gray2,
              borderRadius: 16,
            }}
          ></View>
        </View>
        <Text
          style={{
            color: colors.darkbackground,
            ...FONTS.h4,
            paddingTop: 5,
            alignSelf: "center",
          }}
        >
          {`D${props.date}`}
        </Text>
      </View>
    );
  };

  const SelectedCircle = (props: any) => {

    return (
      <View style={{ alignItems: "center", height: 42, width: 42 }}>
        <LinearGradient
          locations={[0.0, 1.0]}
          colors={[`${colors.grade1}`, `${colors.grade2}`]}
          style={{
            height: 32,
            width: 32,
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={Right}
            style={{ height: 15, width: 15, tintColor: "while" }}
          />
        </LinearGradient>
        <Text style={{ color: colors.card, ...FONTS.h4 }}> {`D${props.date}`}</Text>
      </View>
    );
  };

  const BorderCircle = (props: any) => {


    return (
      <View>
        <View style={{ alignItems: "center", height: 42, width: 42 }}>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              borderColor: colors.primary,
              borderWidth: 4,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                height: 36,
                width: 36,
                borderRadius: 18,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LinearGradient
                locations={[0.0, 1.0]}
                colors={[`${colors.grade1}`, `${colors.grade2}`]}
                style={{
                  height: 32,
                  width: 32,
                  borderRadius: 16,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={Right}
                  style={{ height: 15, width: 15, tintColor: "while" }}
                />
              </LinearGradient>
            </View>
          </View>
          <Text style={{ color: 'black', ...FONTS.h4 }}> {`D${props.date}`}</Text>
        </View>
      </View>
    );
  };





  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: 'center'

      }}
    >
      {props.data.map((a: any, i: any) => {
        return (
          <Pressable key={i} onPress={() => selectedDay(a.dayName)}>
            {(a.isDayComplete == 1) ? <SelectedCircle date={a.dayName} /> : curruntDay == a.dayName && a.isDayComplete == 0 ? <BorderCircle date={a.dayName} /> : <Circle date={a.dayName} />}
          </Pressable>
        )
      })}
    </View>
  );
};
