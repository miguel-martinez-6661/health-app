import React from 'react';
import {Text, View} from 'react-native';

export const Header = () => {
  return (
    <View className="p-2">
      <Text className="text-lg">Hello, Miguel</Text>
      <Text className="font-bold text-3xl">Activities</Text>
    </View>
  );
};
