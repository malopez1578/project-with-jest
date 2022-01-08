import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import App from './App'

configure({ adapter: new Adapter() })

describe('App.jsx', () => {
    it('renders', () => {
        const wrapper = shallow(<App />)
        const p = wrapper.find('p')
        expect(p.text()).equal('You clicked 0 times')
    })
})
