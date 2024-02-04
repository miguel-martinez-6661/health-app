import React, {useCallback, useEffect, useState} from 'react';
import {Linking, SafeAreaView, ScrollView} from 'react-native';
import {HealthStatus} from './src/components/health-status';
import {HealthState} from './src/interface/health.interface';
import {RequestPermission} from './src/components/request-permission';
import {Header} from './src/components/header';
// @ts-ignore
import {initHealth, getHealthSteps} from './src/utils/health-utils';

const App = () => {
  const [state, setState] = useState<HealthState>();

  const checkAppPermissions = useCallback(async () => {
    Linking.openSettings();
  }, []);

  const getHealthStatus = useCallback(async () => {
    await initHealth();
    const result = await getHealthSteps();
    setState(result);
  }, []);

  useEffect(() => {
    getHealthStatus();
  }, [getHealthStatus]);

  return (
    <SafeAreaView className="bg-white h-full">
      <Header />
      <ScrollView>
        {state?.permissionGranted ? (
          <HealthStatus>
            <HealthStatus.Title>Steps</HealthStatus.Title>
            <HealthStatus.Value description="steps">
              {state?.stepCount || 0}
            </HealthStatus.Value>
          </HealthStatus>
        ) : (
          <RequestPermission onPress={checkAppPermissions} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
