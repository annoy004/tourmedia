import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ChevronDownIcon, MagnifyingGlassIcon, UserIcon ,AdjustmentsVerticalIcon } from "react-native-heroicons/outline";

import LikesScreen from '../screens/LikesScreen';
import HomeScreen from '../screens/HomeScreen'
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import BasicInfo from '../screens/BasicInfo';
import NameScreen from '../screens/NameScreen';
import EmailScreen from '../screens/EmailScreen';
import PasswordScreen from '../screens/PasswordScreen';
import BirthSceen from '../screens/BirthScreen';
import LocationScreen from '../screens/LocationScreen'
import GenderScreen from '../screens/GenderScreen';
import TypeScreen from '../screens/TypeScreen';
import DatingType from '../screens/DatingType';
import LookingFor from '../screens/LookingFor';
import HomeTownScreen from '../screens/HomeTownScreen';
import PhotoScreen from '../screens/PhotoScreen';
import PromptsScreen from '../screens/PromptsScreen';
import ShowPromptsScreen from '../screens/ShowPromptsScreen';
import PrefinalScreen from '../screens/PrefinalScreen';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
     
    function BottomTabs() {

        return (
            <Tab.Navigator screenOptions={() => ({
                tabBarShowLabel : false
            })}>
                <Tab.Screen name='Home' component={HomeScreen} options = {{
                         tabBarStyle: {backgroundColor: '#101010'},
                         
                         headerShown: false,
                         tabBarIcon:({focused}) => 
                            focused ? (
                                <MagnifyingGlassIcon name= "alpha" size={35} color='white' />
                            ) : (
                                <MagnifyingGlassIcon name="alpha" size={35} color='#989898' />
                            ) 
            
                    
                    }}
        />
        <Tab.Screen name='Likes' component={LikesScreen} options = {{
                         tabBarStyle: {backgroundColor: '#101010'},
                         
                         headerShown: false,
                         tabBarIcon:({focused}) => 
                            focused ? (
                                <AdjustmentsVerticalIcon name= "heart" size={35} color='white' />
                            ) : (
                                <AdjustmentsVerticalIcon name="heart" size={35} color='#989898' />
                            ) 
            
                    
                    }}
        />
        <Tab.Screen name='Chat' component={ChatScreen} options = {{
                         tabBarStyle: {backgroundColor: '#101010'},
                        
                         headerShown: false,
                         tabBarIcon:({focused}) => 
                            focused ? (
                                <ChevronDownIcon name= "chat" size={35} color='white' />
                            ) : (
                                <ChevronDownIcon name="chat" size={35} color='#989898' />
                            ) 
            
                    
                    }}
        />
         <Tab.Screen name='profile' component={ProfileScreen} options = {{
                         tabBarStyle: {backgroundColor: '#101010'},
                         headerShown: false,
                         tabBarIcon:({focused}) => 
                            focused ? (
                                <UserIcon name= "person" size={35} color='white' />
                            ) : (
                                <UserIcon name="person" size={35} color='#989898' />
                            ) 
            
                    
                    }}
        />
            </Tab.Navigator>
    
      )
    }
     const AuthStack = () => {
        return (
            <Stack.Navigator>
                {/* <Stack.Screen name='Basic' component={BasicInfo} options = {{headerShown:false}}/> */}
                <Stack.Screen name='Name' component={NameScreen} options = {{headerShown:false}}/>
                <Stack.Screen name='Email' component={EmailScreen} options = {{headerShown:false}}/>
                <Stack.Screen name='Password' component={PasswordScreen} options = {{headerShown:false}}/>
                <Stack.Screen name='Birth' component={BirthSceen} options = {{headerShown:false}}/>
                <Stack.Screen name='Location' component={LocationScreen} options = {{headerShown:false}}/>
                <Stack.Screen name='Gender' component={GenderScreen} options = {{headerShown:false}}/>
                <Stack.Screen name='Type' component={TypeScreen} options = {{headerShown:false}}/>
                <Stack.Screen name='Dating' component={DatingType} options = {{headerShown:false}}/>
                <Stack.Screen name='LookingFor' component={LookingFor} options = {{headerShown:false}}/>
                <Stack.Screen name='Hometown' component={HomeTownScreen} options = {{headerShown:false}}/>
                <Stack.Screen name='photos' component={PhotoScreen} options = {{headerShown:false}}/>
                <Stack.Screen name='prompt' component={PromptsScreen} options = {{headerShown:false}}/>
                <Stack.Screen name='showPrompts' component={ShowPromptsScreen} options = {{headerShown:false}}/>
                <Stack.Screen name='prefinal' component={PrefinalScreen} options = {{headerShown:false}}/>
            </Stack.Navigator>
        )
     }

    function MainStack () {
        return (
            <Stack.Navigator>
                <Stack.Screen name= "Main" component={BottomTabs} options ={{headerShown:false}}/>
            </Stack.Navigator>
        )

    }
    return(
     <NavigationContainer>
        <AuthStack/>
     </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})