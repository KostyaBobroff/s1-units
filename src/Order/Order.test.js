import React from 'react';
import Order from './Order';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App component', () => {
  const data = {
		id: 123,
		date: 1544356800000,
		shop: 'Ali Express',
		items: [
			'Утиный пластмасса для показ новый год',
			'Курица из нержавеющей стали, утка, гусь, голубь, питьевой фонтан',
			'Новый стиль один розница яйцо для упаковки форма латекс',
		]
	};
  const wrapper = shallow(<Order order={data}/>);
  
  it('render with default state DATE',()=> {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
  it('invalid params', ()=> {
    wrapper.setProps({order: {}});
    
    expect(wrapper.find('.Order-items').children().length).toEqual(0);
  });
});
