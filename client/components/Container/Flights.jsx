import React from 'react';
import FlightForm from './FlightForm.jsx';
import FlightList from '../Output/FlightList.jsx';
import {connect} from 'react-redux';
import getFlightData  from '../../actions/thunkAction.js';
import {setDepartureCity, 
  setArrivalCity, 
  setDepartureDate , 
  setReturnDate ,
  setPassengers, 
  setTab, 
  setRange,
setFilterData} from '../../actions';
import PropTypes from 'prop-types';

class Flights extends React.Component {
  constructor(props){
    super(props);
   
  }

 componentWillReceiveProps(nextProps){
  const {leftRange , rightRange } = nextProps;
  
  if(leftRange !== this.props.leftRange ||rightRange !== this.props.rightRange )
    {
      
     this.props.getData();
    }
  }
 

  render() {
    
       return (
        <div className="row margin-zero">
          <FlightForm {...this.props}/>
          <FlightList {...this.props}/>
        </div>
       );
  }
}

const mapStateToProps = state => {
  return {
    flightData : state.data,
    departureCity: state.departureCity,
    arrivalCity:state.arrivalCity,
    departureDate:state.departureDate,
    returnDate:state.returnDate,
    passengers:state.passengers,
    tabSelected:state.tabSelected,
    submitClicked:state.submitClicked,
    leftRange:state.leftRange,
    rightRange:state.rightRange
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
     onDepartureDateSet:date =>{
       dispatch(setDepartureDate(date))
     },
      onReturnDateSet:date =>{
       dispatch(setReturnDate(date))
     },
      onPassengersSet:e =>{
       dispatch(setPassengers(e.target.value))
     },

     getData:() => {
       dispatch(getFlightData())
     },

     setTab:(val) => {
       dispatch(setTab(val))
     },

     setRange:(val) => {
       dispatch(setRange(val))
     },
     setFilterData:(items) =>{
       dispatch(setFilterData(items))
     }
    
  }
}

Flights.propTypes = {
  tabSelected: PropTypes.string,
  
  arrivalCity: PropTypes.string,
  departureDate: PropTypes.string,
  returnDate: PropTypes.string,
  passengers: PropTypes.string,
  flightData: PropTypes.object,
  leftRange:PropTypes.number,
  rightRange:PropTypes.number,
  departureCity: PropTypes.string,
  onDepartureSet: PropTypes.func,
  onArrivalSet: PropTypes.func,
  setTab: PropTypes.func,
  onDepartureDateSet: PropTypes.func,
  setFilterData:PropTypes.func,
  onReturnDateSet: PropTypes.func,
  onPassengersSet: PropTypes.func,
  getData: PropTypes.func,
  setRange:PropTypes.func
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Flights);

