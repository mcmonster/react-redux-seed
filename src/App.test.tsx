import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import App from './App';


describe('App', () => {
  let component: ShallowWrapper<App>;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });

  it('renders as expected', () => {
    expect(component).toMatchSnapshot();
  });
});
