import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useAsyncUpdated, useNews, useRefetchAgain} from '../utils/fetchNews';
import {SwipableListItem} from './components/SwipeableList';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NewsContext, NewsProvider} from '../context/newsContext';
import {PinnedHeader} from './components/PinnedData';
import {ListFooter} from './components/Footer';
import DataWrapper from './components/Wrapper';
import {TrendingHeader} from './components/TrendingNews';

export const LandingScreen = () => {
  const {
    currNews = [],
    setCurrNews,
    setAllNews,
    loading,
  } = useContext(NewsContext);

  useNews(setCurrNews, setAllNews);
  useRefetchAgain();
  useAsyncUpdated();

  const renderList = ({item}) => {
    return <SwipableListItem item={item} />;
  };

  const renderHeader = () => {
    return <PinnedHeader />;
  };

  const renderFlat = () => {
    return (
      <View style={{flex: 1}}>
        <PinnedHeader />
        <TrendingHeader />
        <FlatList
          data={currNews}
          renderItem={renderList}
          keyExtractor={(item, index) => `${item?.content}${index}}`}
          ListFooterComponent={<ListFooter />}
          style={{flex: 1}}
        />
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={styles.main}>
      <DataWrapper loading={loading}>
        <View style={styles.wrap}>{renderFlat()}</View>
      </DataWrapper>
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
