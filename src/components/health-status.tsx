import React from 'react';
import {Text, View} from 'react-native';

interface WithChildren {
  children: string;
  description?: string;
}

const HealthAttributeName = ({children}: WithChildren) => {
  return <Text className="text-lg font-bold text-white">{children}</Text>;
};

const HealthAttributeValue = ({children, description}: WithChildren) => {
  return (
    <View className="flex-col justify-center items-center">
      <Text className="text-4xl text-white font-thin p-3">
        {children}
        <Text className="text-lg">{description}</Text>
      </Text>
    </View>
  );
};

export const HealthStatus = ({children}: WithChildren) => {
  return (
    <View className="m-2">
      <Text className="my-2 text-lg">Your Information</Text>
      <View className="p-2 flex-row justify-between rounded-lg bg-red-500 h-28">
        {children}
      </View>
    </View>
  );
};

HealthStatus.Title = HealthAttributeName;
HealthStatus.Value = HealthAttributeValue;
