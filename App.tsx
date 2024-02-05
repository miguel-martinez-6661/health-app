import React, {useCallback, useEffect, useState} from 'react';
import {Linking, RefreshControl, SafeAreaView, ScrollView} from 'react-native';
import {HealthState} from './src/interface/health.interface';
import {RequestPermission} from './src/components/request-permission';
import {Header} from './src/components/header';
import {HealthStepStatus} from './src/components/health-status';
// @ts-ignore
import {initHealth, getHealthSteps} from './src/utils/health-utils';

const App = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [state, setState] = useState<HealthState>();

  const checkAppPermissions = useCallback(async () => {
    Linking.openSettings();
  }, []);

  const getHealthStatus = useCallback(async () => {
    setRefreshing(true);
    await initHealth();
    const result = await getHealthSteps();
    setState(result);
    setRefreshing(false);
  }, []);

  const onRefresh = useCallback(() => {
    getHealthStatus();
  }, [getHealthStatus]);

  useEffect(() => {
    getHealthStatus();
  }, [getHealthStatus]);

  return (
    <SafeAreaView className="bg-white h-full">
      <Header />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {state?.permissionGranted ? (
          <HealthStepStatus>
            <HealthStepStatus.Title>Steps</HealthStepStatus.Title>
            <HealthStepStatus.Value description="steps">
              {state?.stepCount || 0}
            </HealthStepStatus.Value>
          </HealthStepStatus>
        ) : (
          <RequestPermission onPress={checkAppPermissions} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
