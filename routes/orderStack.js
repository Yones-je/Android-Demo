import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OrderStatus from '../screens/orderStatus';
import HeaderDos from '../components/headerDos';
import BurgerNavButton from '../components/burgerNavButton';

const Stack = createStackNavigator();

export default function orderNavigator({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Din Order"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'yellow',
          height: 60,
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Orderstatus"
        component={OrderStatus}
        options={({navigation}) => {
          return {
            headerLeft: () => {
              return <BurgerNavButton navigation={navigation} />;
            },
            headerBackTitleVisible: false,
            headerTitle: () => (
              <HeaderDos navigation={navigation} title="Status" />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}
