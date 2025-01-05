// import React from 'react';
// import {Login } from '../src/screens/Login/Login';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // import {BasicDetails} from '../src/screens/BasicDetails';
// // import {BusinessTypeSelection} from '../src/screens/BusinessTypeSelection';

// // import { HomeScreen } from '../src/screens/HomeScreen';
// // import  LanguageSelection from '../src/screens/LanguageSelection'
// const Stack = createNativeStackNavigator();
// const App = () => {
  
//   return (
    
//     <NavigationContainer independent={true}>
//       {/* <Stack.Navigator initialRouteName="Login"> */}
//         <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
//         {/* <Stack.Screen name="BusinessTypeSelection" component={BusinessTypeSelection} options={{ headerShown: false }}/> */}
//         {/* <Stack.Screen name="BasicDetails" component={BasicDetails} options={{ headerShown: false }} /> */}

//       {/* </Stack.Navigator> */}
//     </NavigationContainer>
//   );
  
// }
// export default App;


import {View, Text} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../src/screens/Home/Home';
// import Splash from '../screens/Splash/Splash';
import {Login} from '../src/screens/Login/Login';
// import Cart from '../screens/Cart/Cart';
// import Details from '../screens/Details/Details';
// import Wishlist from '../screens/Wishlist/Wishlist';

const Stack = createNativeStackNavigator();
const StackRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      {/* <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Splash" component={Splash} /> */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Wishlist" component={Wishlist} /> */}
    </Stack.Navigator>
  );
};

export default StackRoute;