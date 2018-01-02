import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from './Form';

describe('<Form />', () => {
  it('renders without crashing', () => {
    let wrapper = shallow(<Form />);
    expect(wrapper.length).toBe(1)
  });
})
