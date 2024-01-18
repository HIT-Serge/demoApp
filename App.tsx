import React from 'react';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

// drawerNavigator, StackNavigator, BottomTabNavigator, 


// const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName='User' */}
      <BottomTab.Navigator initialRouteName='User'
        screenOptions={
          {
            headerStyle:
              { backgroundColor: '#320a6b' },
            headerTintColor: '#fff',
            // drawerLabel: 'Home Screen',
            // drawerActiveBackgroundColor: '#320a6b',
            // drawerActiveTintColor: '#ff0',
          }
        }
      >
        {/* <Drawer.Screen name="Welcome" component={WelcomeScreen} */}
        < BottomTab.Screen name="Welcome" component={WelcomeScreen}
          options={{
            // drawerLabel: 'Welcome Screen',
            // drawerIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
            tabBarIcon: ({ color }: { color: string }) => <Ionicons name="home" size={24} color={color} />,
            tabBarActiveTintColor: '#f0f',


          }}
        />
        <BottomTab.Screen name="User" component={UserScreen}
          // <Drawer.Screen name="User" component={UserScreen}
          options={{
            // drawerLabel: 'User Screen',
            // drawerIcon: ({ color }) => <Ionicons name="person-circle" size={18} color={color} />
            tabBarIcon: ({ color }: { color: string }) => <Ionicons name="person-circle" size={24} color={color} />,
            tabBarActiveTintColor: '#f0f',

          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}
// options={
//   {
//   headerStyle:
//     { backgroundColor: '#320a6b' },
//   headerTintColor: '#fff',
//   drawerLabel: 'Welcome Screen',
//   drawerActiveBackgroundColor: '#320a6b',
//   drawerActiveTintColor: '#ff0',
// }
// } 
