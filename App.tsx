import React, {useCallback, useEffect, useState} from 'react';
import {Linking, SafeAreaView, ScrollView} from 'react-native';
import {HealthState} from './src/interface/health.interface';
import {RequestPermission} from './src/components/request-permission';
import {Header} from './src/components/header';
// @ts-ignore
import {initHealth, getHealthSteps} from './src/utils/health-utils';
import {HealthStepStatus} from './src/components/health-status';

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
