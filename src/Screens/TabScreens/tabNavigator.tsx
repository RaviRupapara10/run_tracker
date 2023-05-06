import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Home';
import ReportTab from './ReportTab';
import MeTab from './MeTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../../Common/Theme/ThemeType';
import { ChartTab, HomeTab, UserTab } from '../../../constants/icons';
import { FONTS, SIZES } from '../../../constants';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {

    const { colors } = useTheme();


    return (
        <Tab.Navigator screenOptions={{
            tabBarItemStyle: { height: 50 },
            tabBarStyle: { height: 70,padding:5,borderTopLeftRadius:35,borderTopRightRadius:35 ,elevation:5 },
            tabBarLabelStyle: { ...FONTS.h4, alignSelf: 'center' },
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.grayText,
            headerShown: false,
            tabBarIconStyle: { height: 20, width: 20 }

        }} >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <Image source={HomeTab} style={{ tintColor: color, height: size, width: size }} />
                }} />
            <Tab.Screen name="Report" component={ReportTab}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <Image source={ChartTab} style={{ tintColor: color, height: size, width: size }} />
                }} />
            <Tab.Screen name="Me" component={MeTab}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <Image source={UserTab} style={{ tintColor: color, height: size, width: size }} />
                }} />
        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({})