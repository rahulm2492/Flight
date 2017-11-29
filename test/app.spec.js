import React from 'react';
import App from '../client/components/App';
import Flights from '../client/components/Container/Flights';
import Header from '../client/components/Common/Header'

describe('App', () => {
  const wrapper = shallow(<App/>);
  it('should be a div dom node', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('should be a class attached', () => {
     expect(wrapper.find('.flightSearch')).to.have.length(1);
  });

  it('should render two children as actual', () => {
     expect(wrapper.children()).to.have.length(2);
     
  });

  it('should render two children as Components', () => {
     expect(wrapper.find(Header)).to.have.length(1);
     expect(wrapper.find(Flights)).to.have.length(1);
  });


 
});