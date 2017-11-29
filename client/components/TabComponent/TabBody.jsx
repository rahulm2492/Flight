import React from 'react';
import DateBox from '../Common/DateBox.jsx';
import InputControl from '../Common/InputControl.jsx'
import PropTypes from 'prop-types';

class TabBody extends React.Component {
  constructor(props){
    super(props);
    this.getDepatureDate = this.getDepatureDate.bind(this);
    this.getReturnDate = this.getReturnDate.bind(this);
    
    this.state = {
      departureDate :'',
      returnDate :'',
      disabledReturnBox: true,
      validated:true
    }
  }
  componentWillReceiveProps(nextProps){
   
    const returnDateVal = nextProps.selectedTab === 'twoWay' ? nextProps.returnDate : true;
    const {departureCity , arrivalCity, departureDate,  passengers } = nextProps;
    if(departureCity && arrivalCity && departureDate && passengers && returnDateVal){
      this.setState({
        validated:false
      })
    } else {
      this.setState({
        validated:true
      })
    }
  }
 getDepatureDate(e){
  this.setState({
    departureDate : e.target.value ,
    disabledReturnBox: !e.target.value
  });
  e.target.value && this.props.onDepartureDateSet(this.formatDate(e.target.value));
 }


 getReturnDate(e){
 
  e.target.value && this.props.onReturnDateSet(this.formatDate(e.target.value));
 }

 formatDate(date){
   let someDay = new Date(date);
   let dd = someDay.getDate();
   let mm = someDay.getMonth()+1; 

    let yyyy = someDay.getFullYear();
    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } 
   return dd+'/'+mm+'/'+yyyy;
 }
  render() {
  const {onDepartureSet , onArrivalSet, onDepartureDateSet, onReturnDateSet, onPassengersSet, getData } = this.props;
       return (
        
            <div className = 'tabBody'>
              <InputControl type='text' placeHolder ='Enter Origin City' onBlur={onDepartureSet}/>
              <InputControl type='text' placeHolder ='Enter Destination City' onBlur={onArrivalSet} />
              <DateBox placeHolder = 'Departure Date' 
                      disabled={false} 
                      onChange={this.getDepatureDate} 
                      onBlur={onDepartureDateSet}
              />
             { this.props.selectedTab === 'twoWay' ? <DateBox  
                  placeHolder = 'Return Date' 
                  minDate={this.state.departureDate}
                  onChange={this.getReturnDate} 
                  onBlur={onReturnDateSet}
                  disabled = {this.state.disabledReturnBox}/> : null}
              <InputControl type='number' min={1} max = {6}  onBlur={onPassengersSet} placeHolder ='Passengers'/>
              <button  disabled={this.state.validated} onClick={getData}>Search</button>
              
            </div>
     
       );
  }
}


TabBody.defaultProps = {
  selectedTab: 'oneWay',

};



TabBody.propTypes = {
  selectedTab:PropTypes.string,
  arrivalCity: PropTypes.string,
  departureDate: PropTypes.string,
  returnDate: PropTypes.string,
  passengers: PropTypes.string,
  departureCity: PropTypes.string,
  onDepartureSet: PropTypes.func,
  onArrivalSet: PropTypes.func,
  onDepartureDateSet: PropTypes.func,
  onReturnDateSet: PropTypes.func,
  onPassengersSet: PropTypes.func,
  getData: PropTypes.func,
}
export default TabBody;
