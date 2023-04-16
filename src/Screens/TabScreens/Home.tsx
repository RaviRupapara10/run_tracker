import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FONTS, SIZES } from '../../../constants'
import { useTheme } from '../../Common/Theme/ThemeType';
import { CloclTotal, Right, Run, Walk, calander } from '../../../constants/icons';
import MyBtn from '../../Common/MyBtn';
import LinearGradient from 'react-native-linear-gradient';
import '../../Common/Class/model'
import { Days } from '../../Common/Class/model';

const Home = () => {
	const { colors } = useTheme();

	const variable: Days[] = [{ day: 1, iscurrntDay: false, isPreviousDay: true },
	{ day: 2, iscurrntDay: false, isPreviousDay: true },
	{ day: 3, iscurrntDay: false, isPreviousDay: true },
	{ day: 4, iscurrntDay: true, isPreviousDay: false },
	{ day: 5, iscurrntDay: false, isPreviousDay: false },
	{ day: 6, iscurrntDay: false, isPreviousDay: false },
	{ day: 7, iscurrntDay: false, isPreviousDay: false }];

	const HomeHeader = () => {
		return (
			<View style={styles.header}>
				<Text style={{
					fontWeight: '900', letterSpacing: -0.3, textAlign: 'left',
					fontFamily: 'Roboto-Black', fontSize: 22, lineHeight: 26, color: colors.darkbackground, flex: 1, textTransform: 'uppercase'
				}} >
					Running
				</Text>
				<MyBtn source={calander} />
			</View>

		)
	}

	const Weeks = () => {
		return (
			<View style={{ paddingVertical: 5 }}>
				<ScrollView horizontal={true}
					showsHorizontalScrollIndicator={false}
				>
					<Pressable>
						<LinearGradient
							locations={[0.0, 1.0]}
							colors={[`${colors.grade1}`, `${colors.grade2}`]}
							style={[styles.weeks, { backgroundColor: colors.background }]}>
							<Text style={{
								...FONTS.HomeCard, color: colors.white
							}}>
								Week 1
							</Text>
						</LinearGradient>

					</Pressable>
					<Pressable>
						<LinearGradient
							locations={[0.0, 1.0]}
							colors={[`${colors.grade1}`, `${colors.grade2}`]}
							style={[styles.weeks, { backgroundColor: colors.background }]}>
							<Text style={{
								...FONTS.HomeCard, color: colors.white
							}}>
								Week 2
							</Text>
						</LinearGradient>
					</Pressable>
					<Pressable>
						<LinearGradient
							locations={[0.0, 1.0]}
							colors={[`${colors.grade1}`, `${colors.grade2}`]}
							style={[styles.weeks, { backgroundColor: colors.background }]}>
							<Text style={{
								...FONTS.HomeCard, color: colors.white
							}}>
								Week 3
							</Text>
						</LinearGradient>
					</Pressable>

					<Pressable>
						<LinearGradient
							locations={[0.0, 1.0]}
							colors={[`${colors.grade1}`, `${colors.grade2}`]}
							style={[styles.weeks, { backgroundColor: colors.background }]}>
							<Text style={{
								...FONTS.HomeCard, color: colors.white
							}}>
								Week 4
							</Text>
						</LinearGradient>
					</Pressable>
				</ScrollView>
			</View>
		)
	}



	const Days = () => {

		const Circle = (props: any) => {
			return (
				<View style={{ padding: 5 }}>
					<View style={{ alignItems: 'center' }}>
						<View style={{ height: 32, width: 32, borderWidth: 3, borderColor: colors.gray2, borderRadius: 16 }}></View>
					</View>
					<Text style={{
						color: colors.darkbackground,
						...FONTS.h4, paddingTop: 5, alignSelf: 'center'
					}}>
						{`D${props.date}`}
					</Text>
				</View>
			)
		}

		const SelectedCircle = () => {
			return (

				<View style={{ alignItems: 'center', height: 42, width: 42 }}>
					<LinearGradient
						locations={[0.0, 1.0]}
						colors={[`${colors.grade1}`, `${colors.grade2}`]}
						style={{ height: 32, width: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
						<Image source={Right} style={{ height: 15, width: 15, tintColor: 'while' }} />
					</LinearGradient>
					<Text style={{ color: colors.card, ...FONTS.h4 }}>D1</Text>

				</View>
			)
		}

		const BorderCircle = () => {
			return (
				<View >
					<View style={{ alignItems: 'center', height: 42, width: 42 }}>
						<View style={{
							height: 40, width: 40, borderRadius: 20,
							alignItems: 'center', justifyContent: 'center',
							borderColor: colors.primary, borderWidth: 4
						}}>
							<View style={{
								backgroundColor: 'white', height: 36, width: 36, borderRadius: 18,
								alignItems: 'center', justifyContent: 'center'
							}}>
								<LinearGradient
									locations={[0.0, 1.0]}
									colors={[`${colors.grade1}`, `${colors.grade2}`]}
									style={{ height: 32, width: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
									<Image source={Right} style={{ height: 15, width: 15, tintColor: 'while' }} />
								</LinearGradient>
							</View>
						</View>
						<Text style={{ color: colors.card, ...FONTS.h4, }}>D1</Text>
					</View>
				</View>
			)
		}

		const [Selected, setSelected] = useState<boolean>(true);

		return (
			<View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
				{
					variable.map(a => {
						if (a.iscurrntDay) {
							return <BorderCircle key={a.day} />
						} else if (a.isPreviousDay) {
							return <SelectedCircle key={a.day} />
						} else {
							return <Circle date={a.day} key={a.day} />
						}
					})
				}
			</View>
		)
	}
	35


	const DaySwiper = () => {
		return (
			<View>
				<View style={{
					height: 283, width: 269, borderRadius: 30,
					backgroundColor: colors.gray1, borderWidth: 2, borderColor: colors.gray2, padding: 20
				}}>
					<View style={{ padding: 5, alignItems: 'center', justifyContent: 'center' }}>
						<Text style={{
							fontSize: 64, fontFamily: 'BebasNeue-Regular', fontWeight: '800',
							color: colors.cardColor, letterSpacing: -5, textTransform: 'uppercase',
						}}>DAY 1</Text>
					</View>
					<View style={{
						flexDirection: 'row',
						justifyContent: 'space-evenly'
					}}>
						<View>
							<LinearGradient
								locations={[0.0, 1.0]}
								colors={[`${colors.grade1}`, `${colors.grade2}`]}
								style={{ height: 30, width: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
								<Image source={Run} style={{ height: 12, width: 10, tintColor: 'while' }} />
							</LinearGradient>
						</View>
						<View>
							<LinearGradient
								locations={[0.0, 1.0]}
								colors={[`${colors.grade1}`, `${colors.grade2}`]}
								style={{ height: 32, width: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
								<Image source={Walk} style={{ height: 12, width: 10, tintColor: 'while' }} />
							</LinearGradient>
						</View>
						<View>
							<View
								style={{
									height: 32, width: 32, borderRadius: 16, alignItems: 'center',
									justifyContent: 'center', backgroundColor: colors.grayText
								}}>
								<Image source={CloclTotal} style={{ height: 12, width: 10, tintColor: 'while' }} />
							</View>
						</View>
					</View>

				</View>
			</View>
		)
	}

	return (
		<View style={{ flex: 1, backgroundColor: colors.background }}>
			<StatusBar backgroundColor={colors.background} />
			<View style={{ padding: 20, alignSelf: 'center', width: SIZES.width }}>
				<HomeHeader />
				<Weeks />
				<Days />
				<View style={{ marginTop: 70, alignItems: 'center' }}>
					<DaySwiper />
				</View>
				<Text>Home</Text>
				<Text>Home</Text>
				<Text>Home</Text>
				<Text>Home</Text>
				<Text>Home</Text>
			</View>
		</View>
	)
}

export default Home

const styles = StyleSheet.create({
	header: {
		alignItems: 'center',
		flexDirection: 'row',
		alignSelf: 'center'
	},
	weeks: {
		height: 60,
		width: 95,
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 4
	}
})