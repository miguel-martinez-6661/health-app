import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TestIDs} from '../constants/test-ids';

interface RequestPermissionProps {
  onPress: () => void;
}

export const RequestPermission = ({onPress}: RequestPermissionProps) => {
  return (
    <View
      testID={TestIDs.REQUEST_PERMISSION_SECTION}
      className="bg-blue-400 m-2 p-4 rounded-lg">
      <Text className="text-lg">
        To start tracking your Health info, you should grant permissions
      </Text>
      <TouchableOpacity
        testID={TestIDs.REQUEST_PERMISSION_BUTTON}
        className="bg-blue-700 p-2 items-center rounded-lg mt-4"
        onPress={onPress}>
        <Text className="text-white text-lg">Grant Permissions</Text>
      </TouchableOpacity>
    </View>
  );
};
