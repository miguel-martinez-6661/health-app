import React from 'react';
import {Text, View} from 'react-native';

interface WithChildren {
  children: React.ReactNode;
  description?: string;
}

const HealthItemName = ({children}: WithChildren) => {
  return <Text className="text-lg font-bold text-white">{children}</Text>;
};

const HealthItemValue = ({children, description}: WithChildren) => {
  return (
    <View className="flex-row items-end gap-2">
      <Text className="text-5xl text-white font-thin">{children}</Text>
      <Text className="text-lg text-white pb-1 font-thin">{description}</Text>
    </View>
  );
};

export const HealthStatus = ({children}: WithChildren) => {
  return (
    <View className="m-2">
      <Text className="my-2 text-lg">Your Information</Text>
      <View className="p-2 flex-row justify-between rounded-lg bg-red-500 h-28 ">
        {children}
      </View>
    </View>
  );
};

HealthStatus.Title = HealthItemName;
HealthStatus.Value = HealthItemValue;
