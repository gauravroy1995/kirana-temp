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

export const PinnedCard = ({item}: {item: ItemProps}) => {
  const {author = '', publishedAt = '', content = '', urlToImage = ''} = item;

  return (
    <View style={styles.cardContainer}>
      <Image source={{uri: urlToImage}} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.authorText}>{author}</Text>
        <Text style={styles.publishedText}>{publishedAt}</Text>
        <Text numberOfLines={3} style={styles.contentText}>
          {content}
        </Text>
      </View>
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
    flexDirection: 'row',
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  authorText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  publishedText: {
    fontSize: 12,
    color: '#777',
  },
  contentText: {
    fontSize: 14,
    marginTop: 8,
  },
});
