import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Provider } from 'react-redux';
import RocketContainer from '../components/RocketContainer';
import store from '../redux/store';

describe('Test', () => {
  const rocketContainer = (
    <Provider store={store}>
      <RocketContainer />
    </Provider>
  );

  test('Take snapshot of this container', () => {
    const container = render(rocketContainer);
    expect(container).toMatchSnapshot();
  });

  test('It has an alert element', () => {
    render(rocketContainer);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
  });
});
