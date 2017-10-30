import React from 'react';


class Tabs extends React.Component {
  constructor(props){
    super(props);
  }
 

  render() {
  
       return (
        
            <div className = 'tabs'>
              <div name = 'oneWay' onClick={this.props.onSwitch}>One Way</div>
              <div name = 'twoWay' onClick={this.props.onSwitch}>Return</div>
            </div>
     
       );
  }
}


Tabs.defaultProps = {
  onSwitch: '',
};

Tabs.propTypes = {
  onSwitch: React.PropTypes.func,
}

export default Tabs;