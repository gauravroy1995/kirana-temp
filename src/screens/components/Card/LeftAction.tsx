import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const LeftActions = ({item}) => {
  const {id} = item || {};
  const onMark = () => {};

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity style={styles.deleteButton} onPress={onMark}>
        <Text style={styles.deleteText}>Pin</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={onMark}>
        <Text style={styles.deleteText}>Pin</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: 'red',
    height: 30,
    width: 60,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 4,
  },
  deleteText: {
    color: 'white',
    fontSize: 12,
  },
});
