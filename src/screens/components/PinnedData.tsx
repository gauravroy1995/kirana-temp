import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ItemProps, PinnedCard} from './PinnedCard';
import {NewsContext} from '../../context/newsContext';

export const PinnedHeader = () => {
  const {pinnedNews = []} = useContext(NewsContext);

  if (!pinnedNews?.length) {
    return null;
  }

  const renderPinned = (item: ItemProps) => {
    return <PinnedCard item={item} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Pinned news</Text>
      {pinnedNews.map(renderPinned)}
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
  },
  container: {
    backgroundColor: '#ffffe0',
  },
});
