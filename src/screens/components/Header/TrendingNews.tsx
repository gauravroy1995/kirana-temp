// components/TrendingHeader.js

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const TrendingHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Trending News</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF7F7F',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
    alignItems: 'center',
    marginVertical: 10,
    marginTop: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white', // Use a contrasting color for better visibility
  },
});
