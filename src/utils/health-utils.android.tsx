import GoogleFit, {StepsResponse} from 'react-native-google-fit';
import {HealthState} from '../interface/health.interface';
import {options} from '../constants/health.android';

const initialState: HealthState = {
  permissionGranted: false,
  stepCount: 0,
};

const getStepsFromAllDevices = (result: StepsResponse[]) => {
  const currentSteps = result.map(r => r.steps.map(s => s.value));
  const steps = currentSteps.flat().reduce((acc, val) => acc + val, 0);
  return steps;
};

export const initHealth = () =>
  new Promise((resolve, reject) => {
    GoogleFit.authorize(options)
      .then(authResult => {
        if (authResult.success) {
          GoogleFit.getDailySteps(new Date())
            .then((result: StepsResponse[]) => {
              const stepCount = getStepsFromAllDevices(result);
              resolve({
                ...initialState,
                permissionGranted: true,
                stepCount,
              });
            })
            .catch(err => {
              reject(err);
            });
        } else {
          resolve({
            ...initialState,
            permissionGranted: false,
          });
        }
      })
      .catch(() => {
        resolve({
          ...initialState,
          isError: true,
        });
      });
  });
