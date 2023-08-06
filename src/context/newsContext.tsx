import React, {useEffect, useState} from 'react';
export const NewsContext = React.createContext({});

export const NewsProvider = ({children}) => {
  const [currNews, setCurrNews] = React.useState([]);
  const [startIndex, setstartIndex] = React.useState(0);
  const [lastIndex, setlastIndex] = React.useState(9);
  const [allNews, setAllNews] = React.useState([]);
  const [pinnedNews, setPinnedNews] = React.useState([]);
  const [deletedNews, setDeletedNews] = React.useState([]);
  const [loading, setLoading] = useState(true);

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
        loading,
        setLoading,
      }}>
      {children}
    </NewsContext.Provider>
  );
};
