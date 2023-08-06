import React from 'react';
import {StyleSheet} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import {ListCard} from './ListCard';
import {RightAction} from './RightAction';
//2488be566d6743169f3b87a5cbb31deb
export const SwipableListItem = ({item}) => {
  const swipeableRef = React.createRef();

  const renderRight = () => {
    return <RightAction item={item} />;
  };

  return (
    <Swipeable ref={swipeableRef} renderRightActions={renderRight}>
      <ListCard item={item} />
    </Swipeable>
  );
};

const styles = StyleSheet.create({});
