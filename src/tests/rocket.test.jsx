import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import Rocket from '../components/Rocket';
import store from '../redux/store';

describe('Tests for rocket component', () => {
  const rocket = (
    <Provider store={store}>
      <Rocket description="Rockets" id="1" image="none" isReserved={false} name="roket" />
    </Provider>
  );
  test('Create snapshot for rocket', () => {
    const component = render(rocket);
    expect(component).toMatchSnapshot();
  });

  test('Rocket has a button element', () => {
    render(rocket);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('It has an image component', () => {
    render(rocket);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  test('The reserve roket button is not focused by default', () => {
    render(rocket);
    const button = screen.getByRole('button');
    expect(button).not.toHaveFocus();
  });
});
