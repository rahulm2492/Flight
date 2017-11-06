import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  constructor(props){
    super(props);
  }
 

  render() {
  
       return (
        
            <div className = 'tabs'>
              <div name = 'oneWay' className = {this.props.name==='oneWay'?'selectedTab':'normalTab'}onClick={this.props.onSwitch}>One Way</div>
              <div name = 'twoWay'  className={this.props.name==='twoWay'?'selectedTab':'normalTab'} onClick={this.props.onSwitch}>Return</div>
            </div>
     
       );
  }
}


Tabs.defaultProps = {
  onSwitch: '',
  name:'oneWay'
};

Tabs.propTypes = {
  onSwitch: PropTypes.func,
  name :PropTypes.string
}

export default Tabs;