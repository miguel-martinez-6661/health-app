import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {Header} from '../src/components/header';
import {TestIDs} from '../src/constants/test-ids';

describe('<Header /> Testing', () => {
  it('should match the Header snapshot', () => {
    const {toJSON} = render(<Header />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render the Header component', () => {
    const {getByTestId} = render(<Header />);
    expect(getByTestId(TestIDs.HEADER)).toBeDefined();
  });

  it('should render the Header component with the correct fields', async () => {
    render(<Header />);
    const greetings = await screen.findByTestId(TestIDs.HEADER_GREETINGS);
    const title = await screen.findByTestId(TestIDs.HEADER_TITLE);
    expect(greetings.props.children).toBe('Hello, Miguel');
    expect(title.props.children).toBe('Activities');
  });
});
