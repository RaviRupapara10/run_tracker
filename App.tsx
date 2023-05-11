// In App.js in a new project

import * as React from 'react';
import { View, Text, useColorScheme, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, } from 'react-native-safe-area-context';
import { MyTheme } from './src/Common/Theme/ThemeType';
import SelectGender from './src/Screens/OnboardingScreens/SelectGender';
import MyProfile from './src/Screens/OnboardingScreens/MyProfile';
import SelectPlan from './src/Screens/OnboardingScreens/SelectPlan';
import TabNavigator from './src/Screens/TabScreens/TabNavigator';
import StartScreen from './src/Screens/TabScreens/Home/StartScreen';
import HomeSwiper from './src/Common/Componants/HomeSwiper';
import JogRun from './src/Screens/TabScreens/Home/JogRun';


const Stack = createNativeStackNavigator();


const MyLightTheme: MyTheme = {
    colors: {
        primary: '#F65626',
        background: '#ffffff',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(216, 216, 216)',
        notification: 'rgb(255, 59, 48)',
        grayText: '#7D7D7D',
        darkbackground: '#0C0C0E',
        gray2: '#F1F1F1',
        white: '#ffffff',
        grade1: '#F65626',
        grade2: '#FE7234',
        gray1: '#F8F8F8',
        cardColor: '#1C1C1E',
        firstGrade1: 'rgba(255, 147, 21, 1)',
        firstGrade2: 'rgba(255, 196, 116, 1)',
        secondGrade1: 'rgba(138, 46, 255, 1)',
        secondGrade2: 'rgba(171, 137, 255, 1)',
    },
};


const MyDarkTheme: MyTheme = {
    colors: {
        primary: '#F65626',
        background: 'rgb(1, 1, 1)',
        card: 'rgb(18, 18, 18)',
        text: 'rgb(229, 229, 231)',
        border: 'rgb(39, 39, 41)',
        notification: 'rgb(255, 69, 58)',
        grayText: '#7D7D7D',
        darkbackground: '#ffffff',
        gray2: '#F1F1F1',
        white: '#ffffff',
        grade1: '#F65626',
        grade2: '#FE7234',
        gray1: '#F8F8F8',
        cardColor: '#1C1C1E',
        secondGrade1: 'rgba(138, 46, 255, 1)',
        secondGrade2: 'rgba(171, 137, 255, 1)',



    },
};





function App() {

    const scheme = useColorScheme();
    // console.log(scheme);


    return (
        <>
            <SafeAreaView style={{ flex: 1 }}  >
                <StatusBar backgroundColor={'transparent'} translucent />
                <NavigationContainer
                    theme={(scheme === 'dark' ? MyLightTheme : MyLightTheme) as any} >
                    <Stack.Navigator initialRouteName='TabNavigator' >
                        <Stack.Group screenOptions={{ headerShown: false }} >
                            <Stack.Screen name="SelectGender" component={SelectGender} />
                            <Stack.Screen name="MyProfile" component={MyProfile} options={{ animationTypeForReplace: 'push', animation: 'slide_from_right' }} />
                            <Stack.Screen name="SelectPlan" component={SelectPlan} options={{ animationTypeForReplace: 'push', animation: 'slide_from_right' }} />
                            <Stack.Screen name="TabNavigator" component={TabNavigator} />
                            <Stack.Screen name="StartScreen" component={StartScreen} />
                            <Stack.Screen name="HomeSwiper" component={HomeSwiper} />
                            <Stack.Screen name="JogRun" component={JogRun} />
                        </Stack.Group>
                        <Stack.Group>

                        </Stack.Group>
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </>

    );
}

export default App;