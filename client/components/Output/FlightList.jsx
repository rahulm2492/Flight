import React from 'react';
import FlightDetailCard from './FlightDetailCard.jsx';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class FlightList extends React.Component {
  constructor(props){
    super(props);
  }
 

 renderDetailCard({data}){
   return data && data[0] && data[0].map((flightOne)=>{
     return data[1].length > 0 ? data[1].map((flightTwo,index)=>{
        return <FlightDetailCard key ={index}flightOne={flightOne} flightTwo={flightTwo}/>
     }) : <FlightDetailCard key ={index} flightOne={flightOne} />
   })
 }

  render() {
       const {flightData} = this.props;
       return flightData && flightData.data && flightData.data[0].length ? (
        
            <div className = 'flightList'>
            <div className='listHeader'>
              <div className='citiesSelected'>
              <span>{this.props.departureCity} ></span>
              <span>{this.props.arrivalCity} </span>
              {this.props.returnDate && <span> > {this.props.departureCity}</span>}
              </div>
              <div className='dateSelected'>
                <span>Departure:{this.props.departureDate}</span>
                
                {this.props.returnDate && <span>Return:{this.props.returnDate}</span>}
                
              </div>
            </div>
           {this.renderDetailCard(this.props.flightData)}
           </div> 
            
     
       ) :null;
  }
}

const mapStateToProps = state => {
  return {
    flightData : state.data,
    departureDate : state.departureDate,
    returnDate : state.returnDate,
    departureCity: state.departureCity,
    arrivalCity: state.arrivalCity

  }
}

FlightList.defaultProps = {
  data: ''
};

FlightList.propTypes = {
  flightData:PropTypes.object,
  data: PropTypes.array,
  departureDate :PropTypes.string,
  returnDate : PropTypes.returnDate,
  departureCity: PropTypes.string,
  arrivalCity: PropTypes.string
}

export default connect(mapStateToProps)(FlightList);