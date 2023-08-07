import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NewsContext} from '../../../context/newsContext';

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
  const {
    author = '',
    publishedAt = '',
    content = '',
    urlToImage = '',
    title,
  } = item;
  const {pinnedNews, setPinnedNews} = useContext(NewsContext);

  const onDelete = () => {
    const existsArray = pinnedNews.filter(item => item.title !== title);
    setPinnedNews(existsArray);
  };

  return (
    <View style={styles.cardContainer}>
      <Image source={{uri: urlToImage}} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.authorText}>{author}</Text>
        <Text style={styles.publishedText}>{publishedAt}</Text>
        <Text numberOfLines={3} style={styles.contentText}>
          {content}
        </Text>
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
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
  deleteButton: {
    marginTop: 4, // Adjust the margin as needed
    backgroundColor: '#FF0000',
    paddingVertical: 6, // Adjust the vertical padding as needed
    paddingHorizontal: 12, // Adjust the horizontal padding as needed
    borderRadius: 4,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
