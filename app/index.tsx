// import {View, Text} from 'react-native';
// import React from 'react';

// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from '../src/screens/Home/Home';
// // import Splash from '../screens/Splash/Splash';
// import {Login} from '../src/screens/Login/Login';
// // import Cart from '../screens/Cart/Cart';
// // import Details from '../screens/Details/Details';
// // import Wishlist from '../screens/Wishlist/Wishlist';

// const Stack = createNativeStackNavigator();
// const StackRoute = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{headerShown: false}}
//       initialRouteName="Home">
//       {/* <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Splash" component={Splash} /> */}
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Login" component={Login} />
//       {/* <Stack.Screen name="Cart" component={Cart} />
//       <Stack.Screen name="Details" component={Details} />
//       <Stack.Screen name="Wishlist" component={Wishlist} /> */}
//     </Stack.Navigator>
//   );
// };

// export default StackRoute;


import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../src/screens/HomeScreen";
import HotelRoom from "../src/screens/HotelRoom";
import OrderData from "../src/screens/OrderData";

const StackRoute = () => {
    const Stack = createNativeStackNavigator();
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="HotelRoom" component={HotelRoom} options={{headerShown:false}}/>
        <Stack.Screen name="OrderData" component={OrderData} options={{headerShown:false}}/>
      </Stack.Navigator>
  );
};

export default StackRoute;

const styles = StyleSheet.create({});
