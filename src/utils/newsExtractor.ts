export const newsExtractor = (data: any) => {
  if (data?.articles) {
    return data?.articles || [];
  }
};

export const pinnedNewsUtil = (pinnedNews = [], setPinnedNews, currItem) => {
  const pinnedLength = pinnedNews.length;
  const newPinnedNews = [...pinnedNews];

  const existsArray = pinnedNews.filter(item => item.title === currItem.title);

  if (existsArray.length) {
    return;
  }

  if (pinnedLength === 3) {
    newPinnedNews.splice(0, 1, currItem);
  } else {
    newPinnedNews.push(currItem);
  }

  setPinnedNews(newPinnedNews);
};

export const isPinned = (pinnedNews = [], currItem) => {
  const existsArray = pinnedNews.filter(item => item.title === currItem.title);

  if (existsArray.length) {
    return true;
  }

  return false;
};

export const deleteData = ({
  currItem,
  currNews,
  setCurrNews,
  lastIndex,
  allNews,
  setlastIndex,
}) => {
  const newCurrNews = currNews.filter(item => item.title !== currItem.title);
  if (lastIndex !== allNews.length - 1) {
    const newNews = allNews[lastIndex + 1] || {};
    setlastIndex(lastIndex + 1);
    newCurrNews.splice(0, 0, newNews);
  }

  setCurrNews(newCurrNews);
};
