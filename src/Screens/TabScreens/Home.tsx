import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FONTS, SIZES } from "../../../constants";
import { useTheme } from "../../Common/Theme/ThemeType";
import {
  Right,
  calander,
} from "../../../constants/icons";
import MyBtn from "../../Common/MyBtn";
import LinearGradient from "react-native-linear-gradient";
import "../../Common/Class/model";
import { Days } from "../../Common/Class/model";
import HomeSwiper from "../../Common/Componants/HomeSwiper";
import { getDBConnection } from "../../Common/DataBase/db-service";
import { UserType } from "../../Common/userModel";


const Home = () => {


  useEffect(() => {
    getData();
  }, [])

  const [userData, setUserData] = useState<UserType[]>([]);

  const getData = async () => {
    try {
      const conn = await getDBConnection();
      const [data] = await conn.executeSql('SELECT * FROM \'WeeklyData\' LIMIT 0,30;');
      // const userData: UserType[] = 
      setUserData(data.rows.raw() as UserType[])
      // console.log('DB Data', userData);
    } catch (e) {
      console.log('eee', e);

    }
  }

  const { colors } = useTheme();

  const variable: Days[] = [
    { day: 1, iscurrntDay: false, isPreviousDay: true },
    { day: 2, iscurrntDay: false, isPreviousDay: true },
    { day: 3, iscurrntDay: false, isPreviousDay: true },
    { day: 4, iscurrntDay: true, isPreviousDay: false },
    { day: 5, iscurrntDay: false, isPreviousDay: false },
    { day: 6, iscurrntDay: false, isPreviousDay: false },
    { day: 7, iscurrntDay: false, isPreviousDay: false },
  ];

  const HomeHeader = () => {
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

  const Weeks = ({ data }: { data: UserType[] }) => {

    type weekData = {
      'isWeekComplete': number,
      "weekName": number,
    }

    useEffect(() => {
      getWeekData();
    }, [])

    const [weekData, setWeeData] = useState([])

    console.log(weekData);
    const getWeekData = async () => {
      try {
        const conn = await getDBConnection();
        const [data] = await conn.executeSql('SELECT isWeekComplete,weekName FROM \'WeeklyData\' group by isWeekComplete,weekName;');
        setWeeData(data.rows.raw() as [])
      } catch (e) {
        console.log('eee', e);
      }
    }

    return (
      <View style={{ paddingVertical: 5 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {weekData.map((a: any, i) =>
            <Pressable key={i}>
              <LinearGradient
                locations={[0.0, 1.0]}
                colors={a.isWeekComplete ? [`${colors.grade1}`, `${colors.grade2}`] : ['white', 'white']}
                style={[styles.weeks, { backgroundColor: colors.background, borderWidth: 2, borderColor: 'red' }]}
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

          {/* <Pressable>
            <LinearGradient
              locations={[0.0, 1.0]}
              colors={[`${colors.grade1}`, `${colors.grade2}`]}
              style={[styles.weeks, { backgroundColor: colors.background }]}
            >
              <Text
                style={{
                  ...FONTS.HomeCard,
                  color: colors.white,
                }}
              >
                Week 2
              </Text>
            </LinearGradient>
          </Pressable>
          <Pressable>
            <LinearGradient
              locations={[0.0, 1.0]}
              colors={[`${colors.grade1}`, `${colors.grade2}`]}
              style={[styles.weeks, { backgroundColor: colors.background }]}
            >
              <Text
                style={{
                  ...FONTS.HomeCard,
                  color: colors.white,
                }}
              >
                Week 3
              </Text>
            </LinearGradient>
          </Pressable>

          <Pressable>
            <LinearGradient
              locations={[0.0, 1.0]}
              colors={[`${colors.grade1}`, `${colors.grade2}`]}
              style={[styles.weeks, { backgroundColor: colors.background }]}
            >
              <Text
                style={{
                  ...FONTS.HomeCard,
                  color: colors.white,
                }}
              >
                Week 4
              </Text>
            </LinearGradient>
          </Pressable> */}
        </ScrollView>
      </View>
    );
  };

  const Days = () => {
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

    const SelectedCircle = () => {

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
          <Text style={{ color: colors.card, ...FONTS.h4 }}>D1</Text>
        </View>
      );
    };

    const BorderCircle = () => {
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
            <Text style={{ color: colors.card, ...FONTS.h4 }}>D1</Text>
          </View>
        </View>
      );
    };

    const [Selected, setSelected] = useState<boolean>(true);

    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {variable.map((a) => {
          if (a.iscurrntDay) {
            return <BorderCircle key={a.day} />;
          } else if (a.isPreviousDay) {
            return <SelectedCircle key={a.day} />;
          } else {
            return <Circle date={a.day} key={a.day} />;
          }
        })}
      </View>
    );
  };
  35;


  //   return (
  //     <View>
  //       <View
  //         style={{
  //           height: 283,
  //           width: 269,
  //           borderRadius: 30,
  //           backgroundColor: colors.gray1,
  //           borderWidth: 2,
  //           borderColor: colors.gray2,
  //           padding: 20,
  //         }}
  //       >
  //         <View
  //           style={{
  //             padding: 5,
  //             alignItems: "center",
  //             justifyContent: "center",
  //           }}
  //         >
  //           <Text
  //             style={{
  //               fontSize: 64,
  //               fontFamily: "BebasNeue-Regular",
  //               fontWeight: "800",
  //               color: colors.cardColor,
  //               letterSpacing: -5,
  //               textTransform: "uppercase",
  //             }}
  //           >
  //             DAY 1
  //           </Text>
  //         </View>
  //         <View
  //           style={{
  //             flexDirection: "row",
  //             justifyContent: "space-evenly",
  //           }}
  //         >
  //           <View style={{ alignItems: "center" }}>
  //             <LinearGradient
  //               locations={[0.0, 1.0]}
  //               colors={[`${colors.grade1}`, `${colors.grade2}`]}
  //               style={{
  //                 height: 40,
  //                 width: 40,
  //                 borderRadius: 20,
  //                 alignItems: "center",
  //                 justifyContent: "center",
  //               }}
  //             >
  //               <Image
  //                 source={Run}
  //                 style={{ height: 20, width: 15, tintColor: "while" }}
  //               />
  //             </LinearGradient>
  //             <Text style={[styles.whiperText, { color: colors.cardColor }]}>
  //               14:00
  //             </Text>
  //             <Text style={{ ...FONTS.body3 }}>walk</Text>
  //           </View>
  //           <View style={{ alignItems: "center" }}>
  //             <LinearGradient
  //               locations={[0.0, 1.0]}
  //               colors={[`${colors.grade1}`, `${colors.grade2}`]}
  //               style={{
  //                 height: 40,
  //                 width: 40,
  //                 borderRadius: 20,
  //                 alignItems: "center",
  //                 justifyContent: "center",
  //               }}
  //             >
  //               <Image
  //                 source={Walk}
  //                 style={{ height: 20, width: 10, tintColor: "while" }}
  //               />
  //             </LinearGradient>
  //             <Text style={[styles.whiperText, { color: colors.cardColor }]}>
  //               14:00
  //             </Text>
  //             <Text style={{ ...FONTS.body3 }}>Run</Text>
  //           </View>
  //           <View style={{ alignItems: "center" }}>
  //             <View
  //               style={{
  //                 height: 40,
  //                 width: 40,
  //                 borderRadius: 20,
  //                 alignItems: "center",
  //                 justifyContent: "center",
  //                 backgroundColor: colors.grayText,
  //               }}
  //             >
  //               <Image
  //                 source={CloclTotal}
  //                 style={{ height: 20, width: 18, tintColor: "while" }}
  //               />
  //             </View>
  //             <Text style={[styles.whiperText, { color: colors.cardColor }]}>
  //               14:00
  //             </Text>
  //             <Text style={{ ...FONTS.body3 }}>Total</Text>
  //           </View>
  //         </View>
  //         <View style={{ alignSelf: "center", margin: 20 }}>
  //           <LinearGradient
  //             locations={[0.0, 1.0]}
  //             colors={[`${colors.grade1}`, `${colors.grade2}`]}
  //             style={{
  //               height: 44,
  //               width: 117,
  //               borderRadius: 22,
  //               alignItems: "center",
  //               justifyContent: "center",
  //             }}
  //           >
  //             <Text style={{ color: colors.background, ...FONTS.body3 }}>
  //               Start
  //             </Text>
  //           </LinearGradient>
  //         </View>
  //       </View>
  //       <View style={{ position: "absolute", alignSelf: "center", top: -20 }}>
  //         <LinearGradient
  //           locations={[0.0, 1.0]}
  //           colors={[`${colors.grade1}`, `${colors.grade2}`]}
  //           style={{
  //             height: 44,
  //             width: 117,
  //             borderRadius: 22,
  //             alignItems: "center",
  //             justifyContent: "center",
  //           }}
  //         >
  //           <Text style={{ color: colors.background, ...FONTS.h2 }}>
  //             WEEK 2
  //           </Text>
  //         </LinearGradient>
  //       </View>
  //     </View>
  //   );
  // };

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: colors.background, marginTop: 30 }}>
        <StatusBar backgroundColor={colors.background} translucent barStyle={"dark-content"} />
        <View style={{ padding: 20, alignSelf: "center", width: SIZES.width }}>
          <HomeHeader />
          <Weeks data={userData} />
          <View style={{ marginTop: 30 }}>
            <Days />
          </View>
          <View style={{ marginTop: 60, alignItems: "center" }}>
            <HomeSwiper />
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
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
