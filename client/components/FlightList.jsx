import React from 'react';
import FlightDetailCard from './FlightDetailCard.jsx';
import {connect} from 'react-redux';

class FlightList extends React.Component {
  constructor(props){
    super(props);
  }
 

 renderDetailCard({data}){
   console.log(data);
   return data && data[0] && data[0].map((flightOne)=>{
     console.log(flightOne);
     return data[1].length > 0 ? data[1].map((flightTwo)=>{
        return <FlightDetailCard flightOne={flightOne} flightTwo={flightTwo}/>
     }) : <FlightDetailCard flightOne={flightOne} />
   })
 }

  render() {
       const {flightData} = this.props;
       return flightData && flightData.data && flightData.data[0].length ? (
        
            <div className = 'flightList'>
            <div class='listHeader'>
              <div className='citiesSelected'>
              <span>{this.props.departureCity} ></span>
              <span>{this.props.arrivalCity} </span>
              {this.props.returnDate && <span> > {this.props.departureCity}</span>}
              </div>
              <div className='dateSelected'>
                <span>Departure:{this.props.departureDate}</span>
                <p></p>
                {this.props.returnDate && <span>Return:{this.props.returnDate}</span>}
                <p></p>
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
  data: React.PropTypes.array,
  departureDate :React.PropTypes.string,
  returnDate : React.PropTypes.returnDate,
  departureCity: React.PropTypes.string,
  arrivalCity: React.PropTypes.string
}

export default connect(mapStateToProps)(FlightList);