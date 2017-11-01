import 'whatwg-fetch';

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





