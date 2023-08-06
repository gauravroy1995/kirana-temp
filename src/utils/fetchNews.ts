import {useContext, useEffect, useState} from 'react';
import {NewsContext} from '../context/newsContext';

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

export const useNews = () => {
  const {setCurrNews, setAllNews, loading, setLoading} =
    useContext(NewsContext);

  useEffect(() => {
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
  }, [setAllNews, setCurrNews]);
};

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
        setlastIndex(0);
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
