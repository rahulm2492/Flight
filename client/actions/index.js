import 'whatwg-fetch';
let click = 0;
export const loadingError = e => {
  return {
    type: 'LOADING_ERROR',
    data: e,
  }
}

export const dataLoading = val => {
  return {
    type: 'LOADING_DATA',
    status: val,
  }
}
export const dataLoaded = text => {
  return {
    type: 'LOADED_DATA',
    data: text,
  }
}

export const setDepartureCity = val =>{
return {
    type: 'DEPARTURE_CITY',
    val,
  }
}
export const setArrivalCity = val =>{
return {
    type: 'ARRIVAL_CITY',
    val
  }
}
export const setDepartureDate = val =>{
return {
    type: 'DEPARTURE_DATE',
    val,
  }
}
export const setReturnDate = val =>{
return {
    type: 'RETURN_DATE',
    val,
  }
}
export const setPassengers = val =>{
return {
    type: 'PASSENGERS',
    val,
  }
}

export function getFlightData() {
    // We return a function instead of an action object
    return (dispatch ,getState) => {
      console.log(getState());
        dispatch(dataLoading(true));
        window.fetch('http://localhost:80/set')
        .then((response) => {
            if (!response.ok) {
                   dispatch(loadingError({
                       data:response.statusText,
                       status: false
                    }));
                    throw Error(response.statusText);
                    
                }

                dispatch(dataLoading(false));

                return response;
        })
        .then((response) => response.json())
        .then((items) => {
            
             dispatch(dataLoaded({data:filter(items,getState),status:false}));
            
           
      });
    };
}

function filter(data,state){
  const {returnDate, departureDate, departureCity, arrivalCity }   = state();
  
  let a=[],b=[];
   data.forEach((item)=>{
    if(departureDate === item.date && departureCity === item.departureCity && arrivalCity === item.arrivalCity ){
      a.push(item);
    }
    if(returnDate === item.date && arrivalCity === item.departureCity && departureCity === item.arrivalCity ){
      b.push(item);
    }
  });
  return [a,b];

}



