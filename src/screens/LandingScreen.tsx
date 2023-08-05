import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useNews} from '../utils/fetchNews';
import {SwipableListItem} from './components/SwipeableList';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NewsContext, NewsProvider} from '../context/newsContext';
import {PinnedHeader} from './components/PinnedData';

export const LandingScreen = () => {
  const {currNews = [], setCurrNews, setAllNews} = useContext(NewsContext);

  useNews(setCurrNews, setAllNews);

  console.log('wow gaurav', currNews);

  const renderList = ({item}) => {
    return <SwipableListItem item={item} onDelete={() => {}} />;
  };

  const renderHeader = () => {
    return <PinnedHeader />;
  };

  const renderFlat = () => {
    return (
      <FlatList
        data={currNews}
        renderItem={renderList}
        keyExtractor={item => `${item?.content}`}
        ListHeaderComponent={renderHeader()}
        style={{flex: 1}}
      />
    );
  };

  return (
    <GestureHandlerRootView style={styles.main}>
      <View style={styles.wrap}>{renderFlat()}</View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  wrap: {
    flex: 1,
    backgroundColor: 'white',
  },
});
