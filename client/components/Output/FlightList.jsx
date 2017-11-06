import React from 'react';
import FlightDetailCard from './FlightDetailCard.jsx';
import PropTypes from 'prop-types';


class FlightList extends React.Component {
  constructor(props){
    super(props);
  }
 

 renderDetailCard({data}) {
   
  
     if(data[0] && data[0].length) {
        return data[0].map((flightOne,i) => {
        return data[1].length > 0 ? data[1].map((flightTwo, i) => {
            return <FlightDetailCard key ={i} flightOne={flightOne} flightTwo={flightTwo}/>
        }) : <FlightDetailCard key ={i} flightOne={flightOne} />
      })} 
   else {
        return data[1] && data[1].map((flightTwo,i) => {
         
         return <FlightDetailCard key ={i} flightTwo={flightTwo} />}
   )}
 }

  render() {
       const {flightData} = this.props;
       const renderData = flightData && flightData.data  && (flightData.data[0].length || flightData.data[1].length);
       return (
        
            <div className = 'flightList'>
            {this.props.submitClicked && renderData ? <div className='listHeader'>
              <div className='citiesSelected'>
              <span>{this.props.departureCity}<i className="glyphicon glyphicon-plane rotateRight"></i></span>
              <span>{this.props.arrivalCity} </span>
              

              {this.props.returnDate && <span> <i className="glyphicon glyphicon-plane rotateRight"></i> {this.props.departureCity}</span>}
              </div>
              <div className='dateSelected'>
                {this.props.departureDate && <span>Departure:{this.props.departureDate}</span>}
                
                {this.props.returnDate && <span>Return:{this.props.returnDate}</span>}
                
              </div>
            </div> : <h2> So Where are you planning to FLY ?  </h2>}
           {
              renderData
             ? this.renderDetailCard(this.props.flightData)
             : (this.props.submitClicked ? <h1>OOPS...NO DATA</h1> : <h1> We are waiting for your input </h1>)
            }
           </div> )
            
     
      
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
  arrivalCity: PropTypes.string,
  tabSelected: PropTypes.string,
  submitClicked: PropTypes.bool
}

export default FlightList;