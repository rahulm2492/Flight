import React from 'react';


class DateBox extends React.Component {
  constructor(props){
    super(props);
    this.placeHolderChange = this.placeHolderChange.bind(this);
    this.state = {
      type:'text',
    }
  }
 
 placeHolderChange(e){
  this.setState({
    type:this.state.type === 'text' || e.target.value  ? 'date' : 'text'
  })
 }

  render() {
  
       return (
        
           
             <input 
              disabled={this.props.disabled}
              type = {this.state.type}
              placeholder={this.props.placeholder}
              onChange = {this.props.onChange}
              onBlur={this.placeHolderChange} 
              onFocus={this.placeHolderChange}
              min = {this.props.minDate} >
             </input>
            
      
       );
  }
}


DateBox.defaultProps = {
  placeholder: '',
  disabled:false,
  onChange:null,
  minDate:'1/1/1',
};

DateBox.propTypes = {
  placeholder: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  minDate: React.PropTypes.string
}

export default DateBox;