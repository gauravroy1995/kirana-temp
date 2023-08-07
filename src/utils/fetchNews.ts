import {useCallback, useContext, useEffect, useRef} from 'react';
import {NewsContext} from '../context/newsContext';
import {refreshList} from './newsExtractor';
import {loadNewsState, saveNewsState} from './storage';
import {prefetchImages} from './imageUtil';

const BASE_URL =
  'https://newsapi.org/v2/everything?' +
  'q=Apple&' +
  'from=2023-08-03&' +
  'sortBy=popularity&' +
  'apiKey=2488be566d6743169f3b87a5cbb31deb';

export const fetchNews = async () => {
  try {
    const response = await fetch(BASE_URL);

    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};

/**
 * if async storage is there use that data, or call api again
 */
export const useNews = () => {
  const {
    setCurrNews,
    setAllNews,
    loading,
    setLoading,
    setlastIndex,
    setPinnedNews,
    setDeletedNews,
  } = useContext(NewsContext);

  useEffect(() => {
    loadNewsState().then(data => {
      if (data) {
        //if async data is there
        setCurrNews(data.currNews);
        setlastIndex(data.lastIndex);
        setAllNews(data.allNews);

        setPinnedNews(data.pinnedNews);
        setDeletedNews(data.deletedNews);
        setLoading(false);
      } else {
        //if async data is not there call api
        setLoading(true);
        fetchNews()
          .then(data => {
            if (data?.articles?.length) {
              const firstNews = data?.articles?.slice(0, 10);

              setAllNews(data?.articles);
              setCurrNews(firstNews);
              setLoading(false);
            }
          })
          .catch(err => {
            setLoading(false);
          });
      }
    });
  }, [setAllNews, setCurrNews]);
};

/**
 * basically everytime it refetches the news and checks it should call api or not
 */
export const useRefetchAgain = () => {
  const {
    lastIndex,
    allNews,
    setAllNews,
    setlastIndex,
    setCurrNews,
    loading,
    setLoading,
  } = useContext(NewsContext);
  useEffect(() => {
    if (allNews?.length && !loading) {
      if (lastIndex >= allNews.length) {
        setLoading(true);
        setAllNews([]);
        setlastIndex(9);
        setCurrNews([]);
        fetchNews()
          .then(data => {
            if (data?.articles?.length) {
              const firstNews = data?.articles?.slice(0, 10);
              setAllNews(data?.articles);
              setCurrNews(firstNews);
              setLoading(false);
            }
          })
          .catch(err => {
            setLoading(false);
          });
      }
    }
  }, [lastIndex, allNews, loading]);
};

export const useAsyncUpdated = () => {
  const {lastIndex, allNews, pinnedNews, deletedNews, currNews} =
    useContext(NewsContext);
  useEffect(() => {
    // Save state to AsyncStorage whenever any of the states change
    saveNewsState({
      currNews,
      lastIndex,
      allNews,
      pinnedNews,
      deletedNews,
    });
  }, [currNews, lastIndex, allNews, pinnedNews, deletedNews]);
};

/**
 *
 * @param interval to refresh the list automatically every 1 min
 */
export const useApiPolling = (interval = 1 * 60 * 1000) => {
  const {setCurrNews, lastIndex, allNews, setlastIndex} =
    useContext(NewsContext);

  const fetchDataAndUpdate = useCallback(async () => {
    const params = {
      lastIndex,
      allNews,
      setlastIndex,
      setCurrNews,
    };
    if (allNews?.length) {
      refreshList(params);
    }
  }, [allNews, lastIndex]);

  useEffect(() => {
    const intervalId = setInterval(fetchDataAndUpdate, interval);
    return () => clearInterval(intervalId);
  }, [fetchDataAndUpdate, interval]);
};
