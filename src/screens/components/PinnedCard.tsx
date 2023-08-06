import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export type ItemProps = {
  author: string;
  content: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  title: string;
  url: string;
};

export const PinnedCard = props => {
  const {item, index}: {item: ItemProps} = props || {};

  const {content = ''} = item || {};

  return (
    <View key={`${content}${index}`} style={styles.cardContainer}>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    padding: 12,
    margin: 8,
  },
  pinnedText: {
    color: '#FF5733',
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  contentText: {
    fontSize: 14,
    marginTop: 8,
  },
});
