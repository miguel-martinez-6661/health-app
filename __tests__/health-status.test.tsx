import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {HealthStepStatus} from '../src/components/health-status';
import {TestIDs} from '../src/constants/test-ids';

describe('<HealthStatus /> Testing', () => {
  beforeEach(() => {
    render(
      <HealthStepStatus>
        <HealthStepStatus.Title>Steps</HealthStepStatus.Title>
        <HealthStepStatus.Value description="steps">20</HealthStepStatus.Value>
      </HealthStepStatus>,
    );
  });

  it('should render all informations', async () => {
    const section = await screen.findByTestId(TestIDs.HEALTH_STEP_SECTION);
    const name = await screen.findByTestId(TestIDs.HEALTH_STEP_NAME);
    const value = await screen.findByTestId(TestIDs.HEALTH_STEP_VALUE);
    const description = await screen.findByTestId(
      TestIDs.HEALTH_STEP_DESCRIPTION,
    );
    expect(section).toBeDefined();
    expect(name.props.children).toBe('Steps');
    expect(value.props.children).toBe('20');
    expect(description.props.children).toBe('steps');
  });

  it('should contain steps info', async () => {
    const title = await screen.findByText('Steps');
    expect(title.props.children).toBe('Steps');
  });
});
