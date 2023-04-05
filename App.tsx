// In App.js in a new project

import * as React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { DefaultTheme, NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MyTheme } from './src/Common/Theme/ThemeType';
import HomeScreen from './src/Screens/HomeScreen';
import SelectGender from './src/Screens/OnboardingScreens/SelectGender';
import MyProfile from './src/Screens/OnboardingScreens/MyProfile';
import SelectPlan from './src/Screens/OnboardingScreens/SelectPlan';


const Stack = createNativeStackNavigator();


const MyLightTheme: MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#F65626',
        background: '#E5E5E5',
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
    },
};


const MyDarkTheme: MyTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
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


    },
};





function App() {

    const scheme = useColorScheme();
    // console.log(scheme);


    return (
        <SafeAreaProvider>
            <NavigationContainer
                theme={(scheme === 'dark' ? MyDarkTheme : MyLightTheme) as any} >


                <Stack.Navigator initialRouteName='SelectGender' >
                    <Stack.Group screenOptions={{ headerShown: false }} >
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="SelectGender" component={SelectGender} />
                        <Stack.Screen name="MyProfile" component={MyProfile} options={{ animationTypeForReplace: 'push', animation: 'slide_from_right' }} />
                        <Stack.Screen name="SelectPlan" component={SelectPlan} options={{ animationTypeForReplace: 'push', animation: 'slide_from_right' }} />
                    </Stack.Group>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default App;