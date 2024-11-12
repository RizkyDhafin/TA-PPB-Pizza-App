import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import PizzaScreen from './screens/PizzaScreen';
import VegPizza from './screens/VegPizza';
import Desert from './screens/Desert';
import CartScreen from './screens/CartScreen';
import OrderData from './screens/OrderData';
import SettingsScreen from './screens/SettingScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen'; // Import OrderHistoryScreen
import Ionicons from 'react-native-vector-icons/Ionicons';
import MenuScreen from './screens/MenuScreen';

// Membuat Stack Navigator
const Stack = createNativeStackNavigator();

// Membuat Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// Navigator untuk layar Home
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PizzaMania" component={PizzaScreen} options={{ headerShown: false }} />
      <Stack.Screen name="VegPizza" component={VegPizza} options={{ headerShown: false }} />
      <Stack.Screen name="Desert" component={Desert} options={{ headerShown: false }} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Order" component={OrderData} options={{ headerShown: false }} />
      <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} options={{ title: 'Order History' }} />
    </Stack.Navigator>
  );
}

// Navigator untuk Tab
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') {
            iconName = 'home-outline';
          } else if (route.name === 'Menu') {
            iconName = 'pizza-outline';
          } else if (route.name === 'Pengaturan') {
            iconName = 'settings-outline';
          } else if (route.name === 'Orders') {
            iconName = 'receipt-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeStack} 
        options={{ title: 'Home', headerShown: false }} 
      />
      <Tab.Screen 
        name="Menu" 
        component={MenuScreen} 
        options={{ title: 'Menu', headerShown: false }} 
      />
      <Tab.Screen 
        name="Orders" 
        component={OrderHistoryScreen} 
        options={{ title: 'Orders', headerShown: true }} 
      />
      <Tab.Screen 
        name="Pengaturan" 
        component={SettingsScreen} 
        options={{ title: 'Pengaturan', headerShown: false }} 
      />
    </Tab.Navigator>
  );
}

// Navigator Utama
export default function StackNavigator() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
