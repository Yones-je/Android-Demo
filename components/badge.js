import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector} from 'react-redux';

export default function Badge() {
  const [showBadge, setShowBadge] = useState(false);
  const cartItems = useSelector((state) => {
    const transformedCartItems = [];
    for (const id in state.cart.items) {
      transformedCartItems.push({
        productId: id,
        title: state.cart.items[id].title,
        price: state.cart.items[id].price,
        quantity: state.cart.items[id].quantity,
        sum: state.cart.items[id].sum,
      });
    }
    return transformedCartItems;
  });
  const badgeValue = cartItems.length;
  if (badgeValue > 0) {
    setShowBadge((prevState) => !prevState);
  }

  return (
    <View style={styles.badgeContainer}>
      {showBadge && <Text style={styles.badgeText}>{badgeValue}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  badgeContainer: {
    position: 'absolute',
    top: -5,
    right: 0,
    left: 0,
    bottom: 0,
    borderRadius: 9,
    height: 18,
    minWidth: 0,
    width: 18,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
    backgroundColor: 'red',
  },
  badgeText: {
    fontSize: 10,
    paddingHorizontal: 0,
    color: 'white',
    fontWeight: 'bold',
  },
});
