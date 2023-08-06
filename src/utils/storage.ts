import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveNewsState = async newsState => {
  try {
    await AsyncStorage.setItem('@newsState', JSON.stringify(newsState));
  } catch (error) {
    console.error('Error saving news state:', error);
  }
};

export const loadNewsState = async () => {
  try {
    const data = await AsyncStorage.getItem('@newsState');
    const parsedData = JSON.parse(data);
    return data ? parsedData : null;
  } catch (error) {
    console.error('Error loading news state:', error);
    return null;
  }
};
