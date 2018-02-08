import { shallow } from 'enzyme';
import React from 'react';

import App from '../app';

describe('App ', () => {
  it('should render without throwing', () => {
    const wrapper = shallow(<App toWhat="Foo" />);

    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').hasClass('title')).toBe(true);
  });

  it('should render text', () => {
    const wrapper = shallow(<App toWhat="Foo" />);

    expect(wrapper.find('div').text()).toBe('Hello ! Foo');
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<App toWhat="Foo" />);

    expect(wrapper).toMatchSnapshot();
  });
});
