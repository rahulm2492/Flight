import React from 'react';
import Tabs from './Tabs.jsx';
import TabBody from './TabBody.jsx';
import InputControl from './InputControl.jsx';


class FlightForm extends React.Component {
  constructor(props){
    super(props);
    this.getSelectedTab = this.getSelectedTab.bind(this);
    this.getRange= this.getRange.bind(this);
    this.state={
      currentTab:'oneWay',
      val:10000
    }
  }
 
 getSelectedTab(e){
  this.setState({
    currentTab: e.target.getAttribute('name')});
 }
 getRange(e){
   this.setState({
    val: e.target.value});
 }

  render() {
  
       return (
        
            <div className = 'flightForm'>
              <Tabs onSwitch = {this.getSelectedTab}/>
              <TabBody selectedTab = {this.state.currentTab}/>
              <div className='slider'>
                <h4>Refine Flight Search</h4>
                <span>1000</span>
                <InputControl type='range'  min={1000} max={10000} step={1000} />
                <span>10000</span>
               </div> 
            </div>
     
       );
  }
}


FlightForm.defaultProps = {
  tempData: '',
};

FlightForm.propTypes = {
  tempData: React.PropTypes.string,
}


export default FlightForm;