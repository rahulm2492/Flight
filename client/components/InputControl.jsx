import React from 'react';


class InputControl extends React.Component {
  constructor(props){
    super(props);
   
  }

  render() {
    let properties = {};
    this.props.max ? properties.max = this.props.max : null;
    this.props.min ? properties.min = this.props.min : null;
    this.props.value ? properties.value = this.props.value : null;
    this.props.step ? properties.step = this.props.step : null;
    const {
        type,
        placeholder ,
        onChange,
        value,
        onBlur

    }= this.props
    
    return (
      <input 
        type={type}
        placeholder ={placeholder}
        onChange ={onChange}
        onBlur= {onBlur}
     
        {...properties}
      >

      </input>
    )
  }
}

InputControl.defaultProps = {
  placeholder: '',
  onChange: '',
  value: '',
  min: '',
  max: '',
  type: 'text'
};

InputControl.propTypes = {
  placeHolder: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  value: React.PropTypes.string,
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  type: React.PropTypes.string
}

export default InputControl;