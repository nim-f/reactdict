import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header.js'

describe('Header', () => {
  it('renders without error', () => {
    const header = shallow(<Header/>)
    expect(header).toHaveLength(1)
    expect(header.find('.header__burger')).toHaveLength(1)
    expect(header.find('.logo')).toHaveLength(1)
  })
})