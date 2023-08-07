import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {
  useApiPolling,
  useAsyncUpdated,
  useNews,
  useRefetchAgain,
} from '../utils/fetchNews';
import {SwipableListItem} from './components/Card/SwipeableList';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NewsContext, NewsProvider} from '../context/newsContext';
import {PinnedHeader} from './components/Card/PinnedData';
import {ListFooter} from './components/Footer/Footer';
import DataWrapper from './components/Wrapper/Wrapper';
import {TrendingHeader} from './components/Header/TrendingNews';

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
  useApiPolling();

  const renderList = ({item}) => {
    return <SwipableListItem item={item} />;
  };

  const renderHeader = () => {
    return (
      <>
        <PinnedHeader />
        <TrendingHeader />
      </>
    );
  };

  const renderFlat = () => {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={currNews}
          renderItem={renderList}
          keyExtractor={(item, index) => `${item?.content}${index}}`}
          ListHeaderComponent={renderHeader()}
          ListFooterComponent={<ListFooter />}
          style={styles.main}
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
