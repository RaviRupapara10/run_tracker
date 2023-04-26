import { Image, StyleSheet, Text, View, StatusBar, SectionList, TouchableOpacity, LayoutAnimation } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useTheme } from '../../Common/Theme/ThemeType';
import { COLORS, FONTS, SIZES } from '../../../constants';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const ReportTab = () => {

	const { colors } = useTheme();
	const insets = useSafeAreaInsets();

	const DATA = [
		{
			title: 'Main dishes',
			data: ['Pizza', 'Burger', 'Risotto'],
		},
		{
			title: 'Sides',
			data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
		},
		{
			title: 'Drinks',
			data: ['Water', 'Coke', 'Beer'],
		},
		{
			title: 'Desserts',
			data: ['Cheese Cake', 'Ice Cream'],
		},
	];


	const ScreenHeader = () => {
		return (
			<View>
				<LinearGradient
					start={{ x: 0, y: 0.5 }}
					end={{ x: 1, y: 0.5 }}
					locations={[0, 1]}
					colors={[`${colors.grade1}`, `${colors.grade2}`]}
					style={{
						height: 222,
						width: SIZES.width,
					}}
				>
					<SafeAreaView>
						<View style={{}}>
							<Text style={[styles.headerText, { color: colors.background }]}>Report</Text>
							<View style={{ flexDirection: 'row', marginTop: 20 }}>
								<View style={styles.distanceTextContainer}>
									<Text style={[styles.distanceText, { color: colors.background }]}>
										0:01
									</Text>
									<Text style={styles.distanceUnit}>
										Mile
									</Text>
								</View>
								<View style={styles.distanceTextContainer}>
									<Text style={[styles.distanceText, { color: colors.background }]}>
										0:01
									</Text>
									<Text style={styles.distanceUnit}>
										Calories
									</Text>
								</View>
								<View style={styles.distanceTextContainer}>
									<Text style={[styles.distanceText, { color: colors.background }]}>
										0:01
									</Text>
									<Text style={styles.distanceUnit}>
										Minute
									</Text>
								</View>
							</View>
						</View>

					</SafeAreaView>
				</LinearGradient>
			</View>
		)
	}

	const ListItems = () => {
		const [open, setopen] = useState(true);
		const onPress = ({ item, index }: any) => {
			LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
			console.log(index);

		};
		return (
			<View style={{ padding: 20 }}>
				<SectionList
					showsVerticalScrollIndicator={false}
					sections={DATA}
					keyExtractor={(item, index) => item + index}
					renderItem={({ item }) => (
						<View>
							{open && (
								<View style={styles.itemCard}>
									<View style={styles.cardImage}></View>
									<View style={styles.cardRight}>
										<Text style={{ ...FONTS.body4, color: colors.cardColor }}>Week 4 - Day 3</Text>
										<View style={{ paddingBottom: 5 }}>
											<Text style={{ ...FONTS.Bebas1, color: colors.cardColor, }}>0.00
												<Text style={{ ...FONTS.body4, color: colors.cardColor }}>mile</Text>
											</Text>
										</View>
										<View style={styles.cardBtn}>
											<Text style={styles.cardBtnText}>00:00:38</Text>
											<Text style={styles.cardBtnText}>00:00 min/mi</Text>
											<Text style={styles.cardBtnText}>1 Kcal</Text>
										</View>
									</View>
								</View>
							)}
						</View>
					)}
					renderSectionHeader={({ item, index }: any) => (
						<TouchableOpacity style={[styles.headerItems,]} onPress={({ }: any) => onPress} activeOpacity={1}>
							<Text style={[styles.headerLeftText, { ...FONTS.h3, color: colors.darkbackground }]}>THIS WEEK</Text>
							<View style={[styles.headerRightButton, {}]}>
								<Text style={styles.headerRightText}>1 WorkOuts</Text>
							</View>
						</TouchableOpacity>
					)}
				/>
			</View>
		)
	}
	return (

		<View style={{
			flex: 1, width: SIZES.width,
		}}>
			<StatusBar translucent={true} barStyle={'dark-content'} backgroundColor={'transparent'} />
			<View>
				<ScreenHeader />
				<ListItems />

			</View>
		</View>
	)
}

export default ReportTab

const styles = StyleSheet.create({
	headerText: {
		...FONTS.body2, fontWeight: '700', fontSize: 22,
		lineHeight: 36,
		letterSpacing: -0.3,
		padding: 23
	},
	distanceText: {
		...FONTS.Bebas4, fontWeight: '400', fontSize: 32,
		lineHeight: 36,
		letterSpacing: -0.3,
	},
	distanceTextContainer: {
		height: 70, width: SIZES.width / 3,
		alignItems: 'center',
		borderRightWidth: 2,
		borderColor: '#ffffff30',
		justifyContent: 'center',


	},
	distanceUnit: {
		color: '#ffffff50',
		...FONTS.body2,
		fontWeight: '500',
		fontSize: 16
	},
	container: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
		marginHorizontal: 16,
	},
	itemCard: {
		backgroundColor: 'white',
		padding: 10,
		marginVertical: 8,
		// width: 327,
		height: 103,
		borderWidth: 1,
		borderColor: 'rgba(241, 241, 241, 1)',
		borderRadius: 15,
		flexDirection: 'row',
		alignItems: 'center',
	},
	cardRight: {
		flex: 1,
		marginLeft: 10,
	},

	cardImage: {
		height: 80, width: 80,
		borderRadius: 10,
		backgroundColor: 'gray'
	},
	cardBtn: {
		flexDirection: 'row', padding: 5,
		paddingHorizontal: 10,
		backgroundColor: 'rgba(246, 86, 38, 1)',
		borderRadius: 15,
		justifyContent: 'space-between',
	},
	cardBtnText: {
		fontFamily: 'Roboto',
		fontSize: 11,
		color: 'white',
		fontWeight: '500'
	},
	headerLeftText: {
		fontSize: 32,
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 24,
	},
	headerRightButton: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 15,
		paddingHorizontal: 10,
		height: 30,
		backgroundColor: 'rgba(246, 86, 38, 0.1)'
	},
	headerRightText: {
		color: '#F65626',
		padding: 5,
		fontWeight: '600',
		fontSize: 16,
	},
	headerItems: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 5,
	}
})