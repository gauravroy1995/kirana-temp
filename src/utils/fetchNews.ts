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
  const {setCurrNews, setAllNews} = useContext(NewsContext);

  useEffect(() => {
    fetchNews()
      .then(data => {
        if (data?.articles?.length) {
          const firstNews = data?.articles?.slice(0, 10);
          console.log('gaurav n', data, firstNews);
          setAllNews(data?.articles);
          setCurrNews(firstNews);
        }
      })
      .catch(err => {});
  }, [setAllNews, setCurrNews]);
};
