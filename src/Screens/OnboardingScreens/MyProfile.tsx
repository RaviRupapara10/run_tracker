import { Pressable, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../Common/Theme/ThemeType';
import LinearGradient from 'react-native-linear-gradient';
import { FONTS, SIZES } from '../../../constants';

const MyProfile = (props: any) => {
    const { colors } = useTheme();





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

    function SelectHeight() {
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
                            color: colors.grayText, ...FONTS.body3
                        }}>
                            Height
                        </Text>
                        <Pressable>
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
                            color: colors.grayText, ...FONTS.body3
                        }}>
                            Weight
                        </Text>

                        <Pressable>
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

    return (
        <View style={{ flex: 1, backgroundColor: colors.background, alignItems: 'center', width: SIZES.width, paddingHorizontal: 20 }}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
            <View>
                {topBars()}
            </View>
            <View style={{ marginTop: 100 }}>
                {selectGenderText()}
            </View>
            <View style={{ marginTop: 120 }}>
                {SelectHeight()}

            </View>
            <View style={{ bottom: 0, position: 'absolute', paddingBottom: 30 }}>
                {nextstexpButton()}
            </View>
        </View>
    )
}

export default MyProfile

const styles = StyleSheet.create({
    topBar: {
        width: 62,
        height: 6,
        borderRadius: 3,
        marginHorizontal: 5,
    }
})