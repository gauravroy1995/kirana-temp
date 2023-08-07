import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

type DataWrapperProps = {
  loading: boolean;
  onRetry: () => void;
  children: any;
};

const DataWrapper: React.FC<DataWrapperProps> = ({loading, children}) => {
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return <View style={styles.main}>{children}</View>;
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: '#fff',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  retryButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
  },

  main: {
    flex: 1,
  },
});

export default DataWrapper;
