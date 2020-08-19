import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';
import {TouchableOpacity} from 'react-native';

const GoToCartButton = ({navigation}) => {
  const goToCart = () => {
    navigation.navigate('Cart');
  };
  return (
    <TouchableOpacity onPress={goToCart}>
      <Icon
        name={Platform.OS === 'android' ? 'md-restaurant' : 'ios-cart'}
        size={23}
        color="deepskyblue"
        style={{padding: 10}}
      />
    </TouchableOpacity>
  );
};
export default GoToCartButton;
