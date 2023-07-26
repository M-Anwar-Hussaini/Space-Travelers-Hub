import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import store from '../redux/store';
import Mission from '../components/Mission';

describe('Tests for mission component', () => {
  const mission = (
    <Provider store={store}>
      <Mission description="Mission 1" id="1" name="my mission" status={false} />
    </Provider>
  );
  test('Take snapshot form the element', () => {
    const component = render(mission);
    expect(component).toMatchSnapshot();
  });

  test('It has a table element', () => {
    render(mission);
    const row = screen.getByTestId('row');
    expect(row).toBeInTheDocument();
  });

  test('Each mission has 4 columns', () => {
    render(mission);
    const row = screen.getByTestId('row');
    expect(row.children).toHaveLength(4);
  });
});
