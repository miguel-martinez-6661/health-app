import React from 'react';
import {Text, View} from 'react-native';
import {TestIDs} from '../constants/test-ids';

interface WithChildren {
  children: React.ReactNode;
  description?: string;
}

const HealthItemName = ({children}: WithChildren) => {
  return (
    <Text
      testID={TestIDs.HEALTH_STEP_NAME}
      className="text-lg font-bold text-white">
      {children}
    </Text>
  );
};

const HealthItemValue = ({children, description}: WithChildren) => {
  return (
    <View className="flex-row items-end gap-2">
      <Text
        testID={TestIDs.HEALTH_STEP_VALUE}
        className="text-5xl text-white font-thin">
        {children}
      </Text>
      <Text
        testID={TestIDs.HEALTH_STEP_DESCRIPTION}
        className="text-lg text-white pb-1 font-thin">
        {description}
      </Text>
    </View>
  );
};

export const HealthStepStatus = ({children}: WithChildren) => {
  return (
    <View testID={TestIDs.HEALTH_STEP_SECTION} className="m-2">
      <Text className="my-2 text-lg">Your Information</Text>
      <View className="p-2 flex-row justify-between rounded-lg bg-red-500 h-28 ">
        {children}
      </View>
    </View>
  );
};

HealthStepStatus.Title = HealthItemName;
HealthStepStatus.Value = HealthItemValue;
