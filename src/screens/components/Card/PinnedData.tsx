import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ItemProps, PinnedCard} from './PinnedCard';
import {NewsContext} from '../../../context/newsContext';

export const PinnedHeader = () => {
  const {pinnedNews = []} = useContext(NewsContext);

  if (!pinnedNews?.length) {
    return null;
  }

  const renderPinned = (item: ItemProps, index: number) => {
    return <PinnedCard key={index} item={item} index={index} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Pinned news</Text>
      </View>
      {pinnedNews.map(renderPinned)}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FF7F7F', // Use the primary color of your app
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 8,
    alignItems: 'center', // Center the text horizontally
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white', // Use a contrasting color for better visibility
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 3, // Add elevation for a subtle shadow effect on Android
    shadowColor: '#000', // Add shadow for a subtle shadow effect on iOS
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
