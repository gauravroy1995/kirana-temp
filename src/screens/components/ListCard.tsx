import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const ListCard = ({item}) => {
  const {
    author = '',
    content = '',
    description = '',
    urlToImage = '',
  } = item || {};

  return (
    <View style={styles.cardContainer}>
      {/* Image */}
      {!!urlToImage ? (
        <Image
          source={{uri: urlToImage}}
          style={styles.cardImage}
          resizeMode="cover"
        />
      ) : null}

      <View style={styles.cardContent}>
        {/* Author */}
        <Text style={styles.authorText}>{author}</Text>

        {/* Content */}
        <Text style={styles.contentText}>{content}</Text>

        {/* Description */}
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    margin: 16,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardContent: {
    padding: 16,
  },
  authorText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  contentText: {
    fontSize: 14,
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 12,
    color: '#888',
  },
});
