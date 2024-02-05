import React from 'react';
import App from '../App';
import {render, waitFor} from '@testing-library/react-native';
import {TestIDs} from '../src/constants/test-ids';

jest.useFakeTimers();
jest.mock('react-native-health');
jest.mock('../src/utils/health-utils', () => ({
  initHealth: jest.fn(),
  getHealthSteps: jest.fn().mockResolvedValue(() => ({
    permissionGranted: true,
    stepCount: 1000,
  })),
}));

describe('<App /> Testing', () => {
  it('should render the App component', () => {
    const {toJSON} = render(<App />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render Apple Health | Google Fit data', async () => {
    const {getByTestId} = render(<App />);
    const requestPermissionComponent = getByTestId(
      TestIDs.REQUEST_PERMISSION_SECTION,
    );
    expect(requestPermissionComponent).toBeDefined();
    await waitFor(() => {
      const stepComponent = getByTestId(TestIDs.HEALTH_STEP_SECTION);
      expect(stepComponent).toBeDefined();
    });
  });
});
