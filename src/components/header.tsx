import React from 'react';
import {Text, View} from 'react-native';
import {TestIDs} from '../constants/test-ids';

export const Header = () => {
  return (
    <View testID={TestIDs.HEADER} className="p-2">
      <Text testID={TestIDs.HEADER_GREETINGS} className="text-lg">
        Hello, Miguel
      </Text>
      <Text testID={TestIDs.HEADER_TITLE} className="font-bold text-3xl">
        Activities
      </Text>
    </View>
  );
};
