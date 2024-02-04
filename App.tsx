import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {HealthStatus} from './src/components/health-status';
import {HealthState, initHealth} from './src/utils/health-utils.ios';
import {RequestPermission} from './src/components/request-permission';
import {Header} from './src/components/header';

const App = () => {
  const [state, setState] = useState<HealthState>();

  const getHealthStatus = useCallback(async () => {
    const status = await initHealth();
    if (!status.isError) {
      setState(status);
    }
  }, []);

  useEffect(() => {
    getHealthStatus();
  }, [getHealthStatus]);

  return (
    <SafeAreaView className="bg-white h-full">
      <Header />
      <ScrollView>
        <HealthStatus>
          <HealthStatus.Title>Steps</HealthStatus.Title>
          <HealthStatus.Value description="steps">
            {state?.stepCount || 0}
          </HealthStatus.Value>
        </HealthStatus>
        <RequestPermission />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
