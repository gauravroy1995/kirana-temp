import React, {useContext} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {NewsContext} from '../../../context/newsContext';
import {refreshList} from '../../../utils/newsExtractor';

export const ListFooter = () => {
  const {
    setPinnedNews,
    pinnedNews = [],
    currNews,
    setCurrNews,
    lastIndex,
    allNews,
    setlastIndex,
  } = useContext(NewsContext);

  const onRefreshPress = () => {
    const params = {
      lastIndex,
      allNews,
      setlastIndex,
      setCurrNews,
    };

    refreshList(params);
  };

  return (
    <TouchableOpacity onPress={onRefreshPress}>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Tap to Refresh</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: 'blue',
  },
});
