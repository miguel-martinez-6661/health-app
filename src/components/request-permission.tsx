import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export const RequestPermission = () => {
  return (
    <View className="bg-blue-400 m-2 p-4 rounded-lg">
      <Text className="text-lg">
        To start tracking your Health info, you should grant permissions
      </Text>
      <TouchableOpacity className="bg-blue-700 p-2 items-center rounded-lg mt-4">
        <Text className="text-white text-lg">Grant Permissions</Text>
      </TouchableOpacity>
    </View>
  );
};
