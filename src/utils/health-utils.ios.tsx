import AppleHealthKit, {HealthValue} from 'react-native-health';
import {options, permissions} from '../constants/health.ios';

export interface HealthState {
  permissionGranted: boolean;
  stepCount?: number;
  isError?: boolean;
}

const initialState: HealthState = {
  permissionGranted: false,
};

export const initHealth = (): Promise<HealthValue> => {
  return new Promise((resolve, reject) => {
    AppleHealthKit.initHealthKit(permissions, (err, results) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });
  });
};

export const isAuthorized = () => {
  return new Promise((resolve, reject) => {
    AppleHealthKit.getAuthStatus(permissions, (error: string, result) => {
      if (error) {
        reject(error);
        return;
      }
      const [hasPermission] = result.permissions.read;
      resolve(!!hasPermission);
    });
  });
};

export const getHealthSteps = (): Promise<HealthState> =>
  new Promise(resolve => {
    isAuthorized().then(hasPermission => {
      if (hasPermission) {
        AppleHealthKit.getStepCount(
          options,
          (err: Object, results: HealthValue) => {
            if (err) {
              resolve({
                ...initialState,
                isError: true,
              });
              return;
            }
            resolve({
              ...initialState,
              permissionGranted: true,
              stepCount: results.value,
            });
          },
        );
      } else {
        resolve({
          ...initialState,
          permissionGranted: false,
        });
      }
    });
  });
