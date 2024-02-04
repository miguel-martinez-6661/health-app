import AppleHealthKit, {HealthValue} from 'react-native-health';
import {options, permissions} from '../constants/health.ios';

export interface HealthState {
  permissionGranted: boolean;
  stepCount: number;
  isError?: boolean;
}

const initialState: HealthState = {
  permissionGranted: false,
  stepCount: 0,
};

export const initHealth = (): Promise<HealthState> =>
  new Promise(resolve => {
    AppleHealthKit.initHealthKit(permissions, (error: string) => {
      if (error) {
        resolve({
          ...initialState,
          permissionGranted: false,
          isError: true,
        });
        console.log('[ERROR] Cannot grant permissions!');
      }

      AppleHealthKit.getStepCount(
        options,
        (err: Object, results: HealthValue) => {
          if (err) {
            resolve({
              ...initialState,
              isError: true,
            });
            console.log('[ERROR] Cannot get step count!');
            return;
          }
          resolve({
            ...initialState,
            permissionGranted: true,
            stepCount: results.value,
          });
        },
      );
    });
  });
