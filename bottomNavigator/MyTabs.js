import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Icon from "react-native-vector-icons/Entypo"
import Icons from "react-native-vector-icons/FontAwesome5"
import Icon1 from "react-native-vector-icons/Feather"
import Icon2 from "react-native-vector-icons/Ionicons"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import SearchScreen from "../screens/Earnings"
import MyAccount from "../screens/Settings"
import SettingScreen from "../screens/Profile"
import HomeScreen from "../screens/Home"

export default function MyTabs() {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#ad1616",
        activeBackgroundColor: "#FFDB58",
        inactiveBackgroundColor: "#FFDB58",
        style: { height: 45 },
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={"#ad1616"} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Icon1 name="search" color={"#ad1616"} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MyAccount}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icons name="user-alt" color={"#ad1616"} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Icon1 name="settings" color={"#ad1616"} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
