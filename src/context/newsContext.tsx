import React, {useEffect} from 'react';
export const NewsContext = React.createContext({});

export const NewsProvider = ({children}) => {
  const [currNews, setCurrNews] = React.useState([]);
  const [startIndex, setstartIndex] = React.useState(0);
  const [lastIndex, setlastIndex] = React.useState(9);
  const [allNews, setAllNews] = React.useState([]);
  const [pinnedNews, setPinnedNews] = React.useState([]);
  const [deletedNews, setDeletedNews] = React.useState([]);

  return (
    <NewsContext.Provider
      value={{
        startIndex,
        setstartIndex,
        allNews,
        setAllNews,
        pinnedNews,
        setPinnedNews,
        lastIndex,
        setlastIndex,
        currNews,
        setCurrNews,
        deletedNews,
        setDeletedNews,
      }}>
      {children}
    </NewsContext.Provider>
  );
};
