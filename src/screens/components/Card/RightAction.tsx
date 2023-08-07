import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NewsContext} from '../../../context/newsContext';
import {
  deleteData,
  isPinned,
  pinnedNewsUtil,
} from '../../../utils/newsExtractor';

export const RightAction = ({item}) => {
  const {id} = item || {};

  const {
    setPinnedNews,
    pinnedNews = [],
    currNews,
    setCurrNews,
    lastIndex,
    allNews,
    setlastIndex,
  } = useContext(NewsContext);

  const onDelete = () => {
    const params = {
      currItem: item,
      currNews,
      setCurrNews,
      lastIndex,
      allNews,
      setlastIndex,
    };

    deleteData(params);
  };
  const onPin = () => {
    pinnedNewsUtil(pinnedNews, setPinnedNews, item);
  };

  const isPinnedN = isPinned(pinnedNews, item);

  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
      {!isPinnedN && (
        <TouchableOpacity style={styles.deleteButton} onPress={onPin}>
          <Text style={styles.deleteText}>Pin</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
    height: 30,
    width: 60,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 4,
  },
  deleteText: {
    color: 'white',
    fontSize: 12,
  },
});
