import {Image} from 'react-native';

export const prefetchImages = (items: []) => {
  if (!items?.length) return null;
  const imageUrls = items.map(item => item.urlToImage);

  imageUrls.map(url => Image.prefetch(url));
};
