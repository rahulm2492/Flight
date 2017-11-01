import {dataLoaded ,dataLoading, loadingError} from './index.js'

export default  () => {
    // We return a function instead of an action object
    return (dispatch ,getState) => {
      console.log(getState());
        dispatch(dataLoading(true));
        window.fetch('http://localhost:80/set',{ mode: 'no-cors'})
        .then((response) => {
            if (!response.ok) {
                   dispatch(loadingError({
                       data:response.statusText,
                       status: false
                    }));
                    throw new Error(response.statusText);
                    
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