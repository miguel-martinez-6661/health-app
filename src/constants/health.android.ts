import {HealthState} from '../interface/health.interface';
import {Scopes, BucketUnit} from 'react-native-google-fit';

export const initialState: HealthState = {
  permissionGranted: false,
  stepCount: 0,
};

export const options = {
  scopes: [Scopes.FITNESS_ACTIVITY_READ, Scopes.FITNESS_BODY_READ],
};

export const googleFitOptions = {
  startDate: '2017-01-01T00:00:17.971Z',
  endDate: new Date().toISOString(),
  bucketUnit: BucketUnit.DAY,
  bucketInterval: 1,
};
