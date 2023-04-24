import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useTheme } from "../../Common/Theme/ThemeType";
import LinearGradient from 'react-native-linear-gradient';
import { CloclTotal, Run, Walk } from '../../../constants/icons';
import { FONTS } from '../../../constants';


const HomeSwiper = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { colors } = useTheme();


  const Data = [
    {
      week: 1,
      Day: 1,
      walkTime: '14:00',
      RunTime: '14:00',
      TotalTime: '14:00',
      isCompleted: false,
    },
    {
      week: 1,
      Day: 1,
      walkTime: '14:00',
      RunTime: '14:00',
      TotalTime: '14:00',
      isCompleted: false,
    },
    {
      week: 1,
      Day: 1,
      walkTime: '14:00',
      RunTime: '14:00',
      TotalTime: '14:00',
      isCompleted: false,
    },
    {
      week: 1,
      Day: 1,
      walkTime: '14:00',
      RunTime: '14:00',
      TotalTime: '14:00',
      isCompleted: false,
    },
  ]

  // const _renderItem = useCallback(({ item, index }: any) => (

  //     // <View key={index}>
  //     //     <View
  //     //         style={{
  //     //             height: 283,
  //     //             width: 269,
  //     //             borderRadius: 30,
  //     //             backgroundColor: colors.gray1,
  //     //             borderWidth: 2,
  //     //             borderColor: colors.gray2,
  //     //             padding: 20,
  //     //         }}
  //     //     >
  //     //         <View
  //     //             style={{
  //     //                 padding: 5,
  //     //                 alignItems: "center",
  //     //                 justifyContent: "center",
  //     //             }}
  //     //         >
  //     //             <Text
  //     //                 style={{
  //     //                     fontSize: 64,
  //     //                     fontFamily: "BebasNeue-Regular",
  //     //                     fontWeight: "800",
  //     //                     color: colors.cardColor,
  //     //                     letterSpacing: -5,
  //     //                     textTransform: "uppercase",
  //     //                 }}
  //     //             >
  //     //                 DAY 1
  //     //             </Text>
  //     //         </View>
  //     //         <View
  //     //             style={{
  //     //                 flexDirection: "row",
  //     //                 justifyContent: "space-evenly",
  //     //             }}
  //     //         >
  //     //             <View style={{ alignItems: "center" }}>
  //     //                 <LinearGradient
  //     //                     locations={[0.0, 1.0]}
  //     //                     colors={[`${colors.grade1}`, `${colors.grade2}`]}
  //     //                     style={{
  //     //                         height: 40,
  //     //                         width: 40,
  //     //                         borderRadius: 20,
  //     //                         alignItems: "center",
  //     //                         justifyContent: "center",
  //     //                     }}
  //     //                 >
  //     //                     <Image
  //     //                         source={Run}
  //     //                         style={{ height: 20, width: 15, tintColor: "while" }}
  //     //                     />
  //     //                 </LinearGradient>
  //     //                 <Text style={[styles.whiperText, { color: colors.cardColor }]}>
  //     //                     14:00
  //     //                 </Text>
  //     //                 <Text style={{ ...FONTS.body3 }}>walk</Text>
  //     //             </View>
  //     //             <View style={{ alignItems: "center" }}>
  //     //                 <LinearGradient
  //     //                     locations={[0.0, 1.0]}
  //     //                     colors={[`${colors.grade1}`, `${colors.grade2}`]}
  //     //                     style={{
  //     //                         height: 40,
  //     //                         width: 40,
  //     //                         borderRadius: 20,
  //     //                         alignItems: "center",
  //     //                         justifyContent: "center",
  //     //                     }}
  //     //                 >
  //     //                     <Image
  //     //                         source={Walk}
  //     //                         style={{ height: 20, width: 10, tintColor: "while" }}
  //     //                     />
  //     //                 </LinearGradient>
  //     //                 <Text style={[styles.whiperText, { color: colors.cardColor }]}>
  //     //                     14:00
  //     //                 </Text>
  //     //                 <Text style={{ ...FONTS.body3 }}>Run</Text>
  //     //             </View>
  //     //             <View style={{ alignItems: "center" }}>
  //     //                 <View
  //     //                     style={{
  //     //                         height: 40,
  //     //                         width: 40,
  //     //                         borderRadius: 20,
  //     //                         alignItems: "center",
  //     //                         justifyContent: "center",
  //     //                         backgroundColor: colors.grayText,
  //     //                     }}
  //     //                 >
  //     //                     <Image
  //     //                         source={CloclTotal}
  //     //                         style={{ height: 20, width: 18, tintColor: "while" }}
  //     //                     />
  //     //                 </View>
  //     //                 <Text style={[styles.whiperText, { color: colors.cardColor }]}>
  //     //                     14:00
  //     //                 </Text>
  //     //                 <Text style={{ ...FONTS.body3 }}>Total</Text>
  //     //             </View>
  //     //         </View>
  //     //         <View style={{ alignSelf: "center", margin: 20 }}>
  //     //             <LinearGradient
  //     //                 locations={[0.0, 1.0]}
  //     //                 colors={[`${colors.grade1}`, `${colors.grade2}`]}
  //     //                 style={{
  //     //                     height: 44,
  //     //                     width: 117,
  //     //                     borderRadius: 22,
  //     //                     alignItems: "center",
  //     //                     justifyContent: "center",
  //     //                 }}
  //     //             >
  //     //                 <Text style={{ color: colors.background, ...FONTS.body3 }}>
  //     //                     Start
  //     //                 </Text>
  //     //             </LinearGradient>
  //     //         </View>
  //     //     </View>
  //     //     <View style={{ position: "absolute", alignSelf: "center", top: -20 }}>
  //     //         <LinearGradient
  //     //             locations={[0.0, 1.0]}
  //     //             colors={[`${colors.grade1}`, `${colors.grade2}`]}
  //     //             style={{
  //     //                 height: 44,
  //     //                 width: 117,
  //     //                 borderRadius: 22,
  //     //                 alignItems: "center",
  //     //                 justifyContent: "center",
  //     //             }}
  //     //         >
  //     //             <Text style={{ color: colors.background, ...FONTS.h2 }}>
  //     //                 WEEK 2
  //     //             </Text>
  //     //         </LinearGradient>
  //     //     </View>
  //     // </View>
  // )
  //     , []);



  return (
    <View
    // style={{
    //   alignItems: 'center',
    //   height: 350,
    //   justifyContent: 'center',
    //   backgroundColor: 'green',
    //   alignSelf: 'center',
    // }}
    >
      <FlatList
        data={Data}
        horizontal
        pagingEnabled
        alwaysBounceHorizontal={true}
        snapToAlignment='center'
        bouncesZoom
        
        renderItem={({ item, index }) => {
          return (
            <View style={{ height: 350, }} key={index} >
              <View style={{
                height: 283,
                width: 269,
                borderRadius: 30,
                backgroundColor: colors.gray1,
                borderWidth: 2,
                borderColor: colors.gray2,
                padding: 20,
                margin: 20,
                marginTop: 40,
                alignItems: 'center',


              }}
              >
                <View
                  style={{
                    padding: 5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 64,
                      fontFamily: "BebasNeue-Regular",
                      fontWeight: "800",
                      color: colors.cardColor,
                      letterSpacing: -5,
                      textTransform: "uppercase",
                    }}
                  >
                    DAY 1
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: 250
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <LinearGradient
                      locations={[0.0, 1.0]}
                      colors={[`${colors.grade1}`, `${colors.grade2}`]}
                      style={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        source={Run}
                        style={{ height: 20, width: 15, tintColor: "while" }}
                      />
                    </LinearGradient>
                    <Text style={[styles.whiperText, { color: colors.cardColor }]}>
                      14:00
                    </Text>
                    <Text style={{ ...FONTS.body3 }}>walk</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <LinearGradient
                      locations={[0.0, 1.0]}
                      colors={[`${colors.grade1}`, `${colors.grade2}`]}
                      style={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        source={Walk}
                        style={{ height: 20, width: 10, tintColor: "while" }}
                      />
                    </LinearGradient>
                    <Text style={[styles.whiperText, { color: colors.cardColor }]}>
                      14:00
                    </Text>
                    <Text style={{ ...FONTS.body3 }}>Run</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <View
                      style={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: colors.grayText,
                      }}
                    >
                      <Image
                        source={CloclTotal}
                        style={{ height: 20, width: 18, tintColor: "while" }}
                      />
                    </View>
                    <Text style={[styles.whiperText, { color: colors.cardColor }]}>
                      14:00
                    </Text>
                    <Text style={{ ...FONTS.body3 }}>Total</Text>
                  </View>
                </View>
                <View style={{ alignSelf: "center", margin: 20 }}>
                  <LinearGradient
                    locations={[0.0, 1.0]}
                    colors={[`${colors.grade1}`, `${colors.grade2}`]}
                    style={{
                      height: 44,
                      width: 117,
                      borderRadius: 22,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ color: colors.background, ...FONTS.body3 }}>
                      Start
                    </Text>
                  </LinearGradient>
                </View>
              </View>
              <View style={{ position: "absolute", alignSelf: "center", top: 20 }}>
                <LinearGradient
                  locations={[0.0, 1.0]}
                  colors={[`${colors.grade1}`, `${colors.grade2}`]}
                  style={{
                    height: 44,
                    width: 117,
                    borderRadius: 22,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: colors.background, ...FONTS.h2 }}>
                    WEEK 2
                  </Text>
                </LinearGradient>
              </View>
            </View>


          )
        }}
      />
    </View>
  )
}

export default HomeSwiper

const styles = StyleSheet.create({
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
})