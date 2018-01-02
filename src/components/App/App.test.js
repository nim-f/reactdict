import React from 'react'
import App from './App'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme'

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders 1 <App /> component', () => {
    const component = shallow(<App />)
    expect(component).toHaveLength(1)
  })
})