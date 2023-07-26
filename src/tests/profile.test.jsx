import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProfileContainer from '../components/ProfileContainer';
import store from '../redux/store';

describe('Test the profile container components', () => {
  const rocket = (
    <Provider store={store}>
      <ProfileContainer />
    </Provider>
  );

  test('Take the snapshot from the component', () => {
    const component = render(rocket);
    expect(component).toMatchSnapshot();
  });

  test('Profile container has two heading elements', () => {
    render(rocket);
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBe(2);
  });
});
