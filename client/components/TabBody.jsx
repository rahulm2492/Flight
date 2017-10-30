import React from 'react';
import DateBox from './DateBox.jsx';
import InputControl from './InputControl.jsx'
import {connect} from 'react-redux';
import {setDepartureCity, setArrivalCity, setDepartureDate , setReturnDate ,setPassengers, getFlightData} from '../actions';


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
    const {departureCity , arrivalCity, departureDate, returnDate, passengers } = nextProps;
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
  this.props.onDepartureDateSet(e);
 }
 getReturnDate(e){
 
  this.props.onReturnDateSet(e);
 }
 
  render() {
  const {onDepartureSet , onArrivalSet, onDepartureDateSet, onReturnDateSet, onPassengersSet, getData } = this.props;
       return (
        
            <div className = 'tabBody'>
              <InputControl type='text' placeholder ='Enter Origin City' onBlur={onDepartureSet}/>
              <InputControl type='text' placeholder ='Enter Destination City' onBlur={onArrivalSet} />
              <DateBox placeholder = 'Departure Date' disabled={false} onChange={this.getDepatureDate} onBlur={onDepartureDateSet}/>
             { this.props.selectedTab === 'twoWay' ? <DateBox  
                  placeholder = 'Return Date' 
                  minDate={this.state.departureDate}
                  onChange={this.getReturnDate} 
                  onBlur={onReturnDateSet}
                  disabled = {this.state.disabledReturnBox}/> : null}
              <InputControl type='number' min={1} max = {6}  onBlur={onPassengersSet} placeholder ='Passengers'/>
              <button  disabled={false} onClick={getData}>Search</button>
              
            </div>
     
       );
  }
}


TabBody.defaultProps = {
  selectedTab: 'oneWay',
};

const mapStateToProps = state => {
  return {
    departureCity: state.departureCity,
    arrivalCity:state.arrivalCity,
    departureDate:state.departureDate,
    returnDate:state.returnDate,
    passengers:state.passengers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDepartureSet: e => {
      dispatch(setDepartureCity(e.target.value))
    },
     onArrivalSet: e => {
      dispatch(setArrivalCity(e.target.value))
     },
     onDepartureDateSet:e =>{
       dispatch(setDepartureDate(e.target.value))
     },
      onReturnDateSet:e =>{
       dispatch(setReturnDate(e.target.value))
     },
      onPassengersSet:e =>{
       dispatch(setPassengers(e.target.value))
     },

     getData:() => {
       dispatch(getFlightData())
     }
    
  }
}

TabBody.propTypes = {
  selectedTab: React.PropTypes.string,
}
export default connect(mapStateToProps, mapDispatchToProps)(TabBody);
