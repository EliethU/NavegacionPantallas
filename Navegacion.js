import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import Settings from "./Screen/Settings";
import Home from "./Screen/Home";
import Users from "./Screen/Users";

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator
        initialRouteName = 'Home'
            ScreenOptions={{
                tabBarActiveTintColor: 'blue',
            }}
        >
            <Tab.Screen name='Home' component={Home} 
                options={{
                    tabBarLabel:'Home',
                    tabBarIcon: ({color, size})=> (
                        <FontAwesome name="home" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name='Settings' component={Settings} 
                options={{
                    tabBarLabel:'Settings',
                    tabBarIcon: ({color, size})=> (
                        <Fontisto name="player-settings" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name='Users' component={Users} 
                options={{
                    tabBarLabel:'Users',
                    tabBarIcon: ({color, size})=> (
                        <FontAwesome6 name="users-rectangle" size={24} color="black" />
                    )
                }}
            />
        </Tab.Navigator>
    )
};

export default function Navegacion() {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}