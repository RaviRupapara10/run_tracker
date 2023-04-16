import { Pressable, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { FONTS, SIZES } from '../../../constants';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomScreen from '../../Common/Componants/BottomScreen';
// import { SectionsWheelPicker, WheelPickerProps } from 'react-native-ui-lib';
import WheelPicker from '../../Common/Componants/Picker';
import { useTheme } from '../../Common/Theme/ThemeType';
type BottomSheetComponentProps = {};

const MyProfile = (props: any) => {
    const { colors } = useTheme();

    
    const [hSheet, sethSheet] = useState<boolean>(false)
    const [wSheet, setwSheet] = useState<boolean>(false)



    const handleHeight = () => {
        sethSheet(true)



    }
    const handleWight = () => {
        if (wSheet == true) {
            setwSheet(!wSheet)
        }
        setwSheet(true)
    }



    function topBars() {

        return (
            <View style={{ flexDirection: 'row', marginTop: SIZES.padding2, }}>
                <LinearGradient
                    locations={[0, 1]}
                    colors={[`${colors.grade1}`, `${colors.grade2}`]}
                    style={styles.topBar}>
                </LinearGradient>

                <LinearGradient
                    locations={[0, 1]}
                    colors={[`${colors.grade1}`, `${colors.grade2}`]}
                    style={styles.topBar}>
                </LinearGradient>
                <View style={[styles.topBar, { backgroundColor: colors.gray2 }]}></View>
            </View>
        )
    }




    function selectGenderText() {
        return (
            <View style={{ alignItems: 'center', }} >
                <Text style={{
                    color: colors.darkbackground, ...FONTS.h1, fontWeight: '700'
                }}>My Profile</Text>

                <Text style={{
                    color: colors.grayText, ...FONTS.body3,
                    textAlign: 'center'
                }}>To ensure the accuracy, please input your
                    accurate information. We never share them
                    with third parties.</Text>
            </View>
        )
    }

    function SelectHeightAndWeight() {




        return (

            <View>


                <View style={{ marginVertical: 10 }}>
                    <View style={{
                        paddingHorizontal: 20,
                        width: SIZES.width,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',

                    }}>
                        <Text style={{
                            color: colors.grayText, ...FONTS.h3
                        }}>
                            Height
                        </Text>
                        <Pressable
                            onPress={handleHeight}
                        >
                            <View style={{
                                height: 60, width: 200,
                                borderRadius: 15,
                                borderWidth: 3,
                                borderColor: colors.gray2,
                                justifyContent: 'center',
                            }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, }}>
                                    <Text style={{
                                        flex: 1,
                                        ...FONTS.h3, color: colors.darkbackground
                                    }}>
                                        5 ft 7 in
                                    </Text>
                                    <View style={{
                                        borderLeftWidth: 10,
                                        borderLeftColor: "transparent",
                                        borderRightWidth: 10,
                                        borderRightColor: "transparent",
                                        borderTopWidth: 10,
                                        borderTopColor: colors.primary,
                                        margin: 10,

                                    }}></View>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <View style={{
                        paddingHorizontal: 20,
                        width: SIZES.width,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            color: colors.grayText, ...FONTS.h3
                        }}>
                            Weight
                        </Text>

                        <Pressable
                            onPress={handleWight}
                        >
                            <View style={{
                                height: 60, width: 200,
                                borderRadius: 15,
                                borderWidth: 3,
                                borderColor: colors.gray2,
                                justifyContent: 'center',
                            }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, }}>
                                    <Text style={{
                                        flex: 1,
                                        ...FONTS.h3, color: colors.darkbackground
                                    }}>
                                        154.3 Ibs
                                    </Text>
                                    <View style={{
                                        borderLeftWidth: 10,
                                        borderLeftColor: "transparent",
                                        borderRightWidth: 10,
                                        borderRightColor: "transparent",
                                        borderTopWidth: 10,
                                        borderTopColor: colors.primary,
                                        margin: 10,

                                    }}></View>
                                </View>
                            </View>
                        </Pressable>
                    </View>

                </View>



            </View>
        )
    }








    function nextstexpButton() {
        return (
            <TouchableWithoutFeedback
                onPress={() => props.navigation.navigate('SelectPlan')}
            >
                <LinearGradient

                    locations={[0.0, 1.0]}
                    colors={[`${colors.grade1}`, `${colors.grade2}`]}
                    style={{
                        height: 60,
                        width: 250,
                        backgroundColor: colors.primary,
                        borderRadius: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text style={{
                        ...FONTS.h3, color: colors.white
                    }}>
                        NEXT STEP
                    </Text>
                </LinearGradient>
            </TouchableWithoutFeedback>
        )
    }

    const heightSheet = () => {
        // const [selected, setSelected] = useState(0)
        const changeIndex = (index: number) => {
            console.log(index);
        };

        const data = ['Hello1', 'Hello2', 'Hello3', 'Hello4', 'Hello5'];
        return (
            <BottomScreen height={50} handleState={sethSheet}>
                <Text>hellow</Text>
                {/* <SectionsWheelPicker sections={data} /> */}
                <WheelPicker selectedIndex={0} options={data} onChange={changeIndex} />
            </BottomScreen>
        )
    }


    const weightSheet = () => {
        return (
            <BottomScreen height={50} handleState={setwSheet} >
                <Text>hellow</Text>
                <Text>hellow</Text>
                <Text>hellow</Text>
                <Text>hellow</Text>
                <Text>hellow</Text>
            </BottomScreen>
        )
    }


    return (
        <GestureHandlerRootView>
            <View style={{ backgroundColor: colors.background, }}>
                <View style={{ alignItems: 'center', paddingHorizontal: 20, height: '100%' }}>
                    <StatusBar barStyle="dark-content" />
                    <View>
                        {topBars()}
                    </View>
                    <View style={{ marginTop: 100 }}>
                        {selectGenderText()}
                    </View>
                    <View style={{ marginTop: 120 }}>
                        {SelectHeightAndWeight()}
                    </View>
                    <View style={{ bottom: 0, position: 'absolute', paddingBottom: 30 }}>
                        {nextstexpButton()}
                    </View>

                </View>

                {hSheet && heightSheet()}
                {wSheet && weightSheet()}
            </View>
        </GestureHandlerRootView>
    )
}

export default MyProfile

const styles = StyleSheet.create({

    topBar: {
        width: 62,
        height: 6,
        borderRadius: 3,
        marginHorizontal: 5,
    },

    modalView: {
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',

    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 10,
        // backgroundColor: 'rgba(0, 0, 0,0.3)'
    },
})