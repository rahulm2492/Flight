import React from 'react';
import Tabs from '../TabComponent/Tabs.jsx';
import TabBody from '../TabComponent/TabBody.jsx';
import PropTypes from 'prop-types';
import Slider from '../Common/Slider.jsx';


class FlightForm extends React.Component {
  constructor(props){
    super(props);
    this.getSelectedTab = this.getSelectedTab.bind(this);
    
    
    this.state={
      currentTab:'oneWay',
    }
  }
  
 
 getSelectedTab(e){
  this.setState({
    currentTab: e.target.getAttribute('name')});
    this.props.setTab( e.target.getAttribute('name'));
 }
 

 

  render() {
  
       return (
        
            <div className = 'flightForm'>
              <Tabs onSwitch = {this.getSelectedTab} name={this.state.currentTab}/>
              <TabBody {...this.props} selectedTab = {this.state.currentTab}/>
              <div className='slider'>
                <h4>Refine Flight Search</h4>
                
                <Slider setRange= {this.props.setRange}/>
               </div> 
              
            </div>
     
       );
  }



}


FlightForm.defaultProps = {
 setRange: null,
 setTab: null,
};

FlightForm.propTypes = {
 setRange : PropTypes.func,
 setTab: PropTypes.func
}


export default FlightForm;