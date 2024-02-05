import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {RequestPermission} from '../src/components/request-permission';
import {TestIDs} from '../src/constants/test-ids';

const onPressFn = jest.fn();

describe('<RequestPermission /> testing', () => {
  it('should display Permissions section', () => {
    const {getByTestId} = render(<RequestPermission onPress={onPressFn} />);
    expect(getByTestId(TestIDs.REQUEST_PERMISSION_SECTION)).toBeDefined();
  });

  it('should be able to open settings', async () => {
    const {getByTestId} = render(<RequestPermission onPress={onPressFn} />);
    const requestPermissionButton = getByTestId(
      TestIDs.REQUEST_PERMISSION_BUTTON,
    );
    fireEvent.press(requestPermissionButton);
    await waitFor(() => {
      expect(onPressFn).toHaveBeenCalled();
    });
  });
});
