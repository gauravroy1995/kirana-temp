import React, {useContext, useState} from 'react';
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
  const [expanded, setExpanded] = useState(false);

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
        {expanded ? (
          <Text style={styles.contentText}>{content}</Text>
        ) : (
          <Text numberOfLines={1} style={styles.contentText}>
            {content}
          </Text>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => setExpanded(!expanded)}
            style={styles.expandCollapseButton}>
            <Text style={styles.buttonText}>
              {expanded ? 'Collapse' : 'Expand'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  expandCollapseButton: {
    backgroundColor: 'blue',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignItems: 'center',
    flex: 1,
    marginRight: 8,
  },
  deleteButton: {
    backgroundColor: '#FF0000',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
