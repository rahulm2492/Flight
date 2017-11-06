import React from 'react';
import FlightForm from '../client/components/Container/FlightForm';
import Tabs from '../client/components/TabComponent/Tabs';
import TabBody from '../client/components/TabComponent/TabBody';



describe('FlightForm', () => {
  const wrapper = shallow(<FlightForm />);
  it('should be a div dom node', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('should be a class attached', () => {
     expect(wrapper.find('.flightForm')).to.have.length(1);
  });

  it('should render two children as actual', () => {
     expect(wrapper.children()).to.have.length(3);
     
  });

  it('should render two children as Components', () => {
     expect(wrapper.find(Tabs)).to.have.length(1);
     expect(wrapper.find(TabBody)).to.have.length(1);
  });


 it('should have an initial currentTab state', function () {
    expect(wrapper.state().currentTab).to.equal('oneWay');
    wrapper.setState({ currentTab: 'twoWay' });
    expect(wrapper.find(TabBody).props().selectedTab).to.equal('twoWay');
    
  });
 
});