import { shallow } from 'enzyme';
import React from 'react';

import App from '../app';

describe('App ', () => {
  it('should render without throwing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('div').length).toBe(1);
  });

  it('should render text', () => {
    const wrapper = shallow(<App/>);

    expect(wrapper.find('div').text()).toBe('Hello World!');
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<App/>);

    expect(wrapper).toMatchSnapshot();
  });
});
