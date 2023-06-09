import { Pressable, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View, Image } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '../../Common/Theme/ThemeType';
import LinearGradient from 'react-native-linear-gradient';
import { FONTS, SIZES } from '../../../constants';
import icons, { ligting } from '../../../constants/icons';
import { Icon } from '@rneui/themed';

const SelectPlan = (props: any) => {
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
                <LinearGradient
                    locations={[0, 1]}
                    colors={[`${colors.grade1}`, `${colors.grade2}`]}
                    style={styles.topBar}>
                </LinearGradient>
            </View>
        )
    }




    function selectGenderText() {
        return (
            <View style={{ alignItems: 'center', }} >
                <Text style={{
                    color: colors.darkbackground, ...FONTS.h1, fontWeight: '700'
                }}>Select training plan</Text>

                <Text style={{
                    color: colors.grayText, ...FONTS.body3,
                    textAlign: 'center'
                }}>You can change it antime you want.</Text>
            </View>
        )
    }




    function SelectPlan() {


        const [beginner, setbeginner] = useState<boolean>()
        const [Intermediate, setIntermediate] = useState<boolean>()
        const [Advanced, setadvanced] = useState<boolean>()

        const BeginnerClick = () => {
            setbeginner(true)
            setIntermediate(!true)
            setadvanced(!true)
        }
        const IntermediateClick = () => {
            setIntermediate(true)
            setbeginner(!true)
            setadvanced(!true)
        }
        const AdvancedClick = () => {
            setadvanced(true)
            setbeginner(!true)
            setIntermediate(!true)
        }

        return (
            <View style={{ padding: 20 }}>

                <Pressable
                    onPress={BeginnerClick}
                    style={{ marginVertical: 10 }}>
                    <LinearGradient
                        locations={[0, 1]}
                        colors={beginner ? [`${colors.grade1}`, `${colors.grade2}`] : [`${colors.border}`, `${colors.border}`]}
                        style={[styles.plan, { backgroundColor: colors.background }]}>
                        <Text style={{ ...FONTS.h1, color: colors.darkbackground, }}>Beginner</Text>
                        <Text style={{ ...FONTS.body4, color: colors.darkbackground, }} >Just start to run</Text>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 10

                        }}>
                            <Image source={ligting} resizeMode='contain' style={{
                                height: 15, width: 15, padding: 5, tintColor: beginner ? colors.white : colors.primary
                            }} />
                            <Image source={ligting} resizeMode='contain' style={{
                                height: 15, width: 15, padding: 5, tintColor: colors.grayText
                            }} />
                            <Image source={ligting} resizeMode='contain' style={{
                                height: 15, width: 15, padding: 5, tintColor: colors.grayText
                            }} />
                        </View>
                    </LinearGradient>
                </Pressable>
                <Pressable
                    onPress={IntermediateClick}
                    style={{ marginVertical: 10 }}>
                    <LinearGradient
                        locations={[0, 1]}
                        colors={Intermediate ? [`${colors.grade1}`, `${colors.grade2}`] : [`${colors.border}`, `${colors.border}`]}
                        style={styles.plan}>
                        <Text style={{ ...FONTS.h1, color: colors.darkbackground }}>Intermediate</Text>
                        <Text style={{ ...FONTS.body4, color: colors.darkbackground }} >Can run 1-2 miles each time</Text>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 10

                        }}>
                            <Image source={ligting} resizeMode='contain' style={{
                                height: 15, width: 15, padding: 5, tintColor: Intermediate ? colors.white : colors.primary
                            }} />
                            <Image source={ligting} resizeMode='contain' style={{
                                height: 15, width: 15, padding: 5, tintColor: Intermediate ? colors.white : colors.primary
                            }} />
                            <Image source={ligting} resizeMode='contain' style={{
                                height: 15, width: 15, padding: 5, tintColor: colors.grayText
                            }} />
                        </View>
                    </LinearGradient>
                </Pressable>
                <Pressable
                    onPress={AdvancedClick}
                    style={{ marginVertical: 10 }}>
                    <LinearGradient
                        locations={[0, 1]}
                        colors={Advanced ? [`${colors.grade1}`, `${colors.grade2}`] : [`${colors.border}`, `${colors.border}`]}
                        style={styles.plan}>
                        <Text style={{ ...FONTS.h1, color: colors.darkbackground }}>Advanced</Text>
                        <Text style={{ ...FONTS.body4, color: colors.darkbackground }} >Ready to intensive running</Text>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 10

                        }}>
                            <Image source={ligting} resizeMode='contain' style={{
                                height: 15, width: 15, padding: 5, tintColor: Advanced ? colors.white : colors.primary
                            }} />
                            <Image source={ligting} resizeMode='contain' style={{
                                height: 15, width: 15, padding: 5, tintColor: Advanced ? colors.white : colors.primary
                            }} />
                            <Image source={ligting} resizeMode='contain' style={{
                                height: 15, width: 15, padding: 5, tintColor: Advanced ? colors.white : colors.primary
                            }} />
                        </View>
                    </LinearGradient>
                </Pressable>


            </View>
        )
    }







    function nextstexpButton() {
        return (
            <TouchableWithoutFeedback
                onPress={() => props.navigation.navigate('TabNavigator')}
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
                        Done
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
            <View style={{ marginTop: 30 }}>
                {SelectPlan()}

            </View>
            <View style={{ bottom: 0, position: 'absolute', paddingBottom: 30 }}>
                {nextstexpButton()}
            </View>
        </View>
    )
}

export default SelectPlan

const styles = StyleSheet.create({
    topBar: {
        width: 62,
        height: 6,
        borderRadius: 3,
        marginHorizontal: 5,
    },
    plan: {
        height: 115, width: 335,
        borderRadius: 15,
        justifyContent: 'center',
        padding: 20,

    }
})