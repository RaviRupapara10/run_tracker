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
import { colors, styles } from "../../Common/Styles";
import { HomeHeader } from "../../Common/Componants/HomeHeader";
import { Weeks } from "../../Common/Componants/Weeks";
import { DaysData } from "../../Common/Componants/DaysData";


const Home = () => {


  useEffect(() => {
    // getData();
    getWeekData();
    getDaysData();
    getDaysDataByWeekId(selectedWeek);
  }, [])

  // const [userData, setUserData] = useState<UserType[]>([]);
  const [selectedWeek, setSelectedWeek] = useState(1)
  const [selectedDays, setSelectedDays] = useState(1)
  // console.log(selectedWeek);


  // const getData = async () => {
  //   try {
  //     const conn = await getDBConnection();
  //     const [data] = await conn.executeSql('SELECT * FROM \'WeeklyData\';');
  //     // const userData: UserType[] = 
  //     setUserData(data.rows.raw() as UserType[])
  //     console.log('DB Data', userData);
  //   } catch (e) {
  //     console.log('eee', e);

  //   }
  // }

  const [weekData, setWeeData] = useState([])

  const getWeekData = async () => {
    try {
      const conn = await getDBConnection();
      const [data] = await conn.executeSql('SELECT isWeekComplete,weekName FROM \'WeeklyData\' group by isWeekComplete,weekName;');
      setWeeData(data.rows.raw() as [])
    } catch (e) {
      console.log('eee', e);
    }
  }

  const [daysData, setDaysData] = useState([])
  const [daysDataOfSelectedWeek, setDaysDataOfSelectedWeek] = useState([])


  const getDaysData = async () => {
    try {
      const conn = await getDBConnection();
      const [data] = await conn.executeSql('SELECT dayName,isDayComplete FROM \'WeeklyData\' group by dayName,isDayComplete;');
      setDaysData(data.rows.raw() as [])
    } catch (e) {
      console.log('eee', e);
    }
  }
  const getDaysDataByWeekId = async (id: number) => {
    try {
      setSelectedWeek(id);
      const conn = await getDBConnection();
      const [data] = await conn.executeSql(`SELECT * FROM \'WeeklyData\' WHERE weekName = ${id} AND planId=1;`);
      setDaysDataOfSelectedWeek(data.rows.raw() as [])
    } catch (e) {
      console.log('eee', e);
    }
  }

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: colors.background, marginTop: 30 }}>
        <StatusBar backgroundColor={colors.background} translucent barStyle={"dark-content"} />
        <View style={{ padding: 20, alignSelf: "center", width: SIZES.width }}>
          <HomeHeader />
          <Weeks data={weekData} onWeekChange={getDaysDataByWeekId} />
          <View style={{ marginTop: 30 }}>
            <DaysData data={daysData} onSelectedDays={setSelectedDays} />
          </View>
          <View style={{ marginTop: 60, alignItems: "center" }}>
            <HomeSwiper data={daysDataOfSelectedWeek} selectedDay={selectedDays} />
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;


