import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as cartActions from '../store/actions/cart';
import {useDispatch} from 'react-redux';

const MenuItem = (props) => {
  const dispatch = useDispatch();

  return (
    <FlatList
      data={props.data}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            dispatch(cartActions.addToCart({item}));
          }}>
          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price}kr</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.description}>{item.description}</Text>
              <Icon name="ios-add" size={30} style={styles.icon} />
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#888',
    borderBottomWidth: 1,
    margin: 5,
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontFamily: 'Poppins-Semibold',
    fontSize: 18,
    color: 'deepskyblue',
  },
  description: {
    fontFamily: 'Quicksand-Bold',
  },
  price: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 16,
  },
  icon: {
    color: 'violet',
  },
});

export default MenuItem;
