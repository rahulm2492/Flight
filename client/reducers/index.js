export default function(state , action)
{
    switch (action.type) {
    case 'LOADING_ERROR':
       return Object.assign({},state ,{error:action.data},{status:action.status})

    case 'LOADING_DATA':
       return Object.assign({},state ,{status:action.status})

    case 'LOADED_DATA':
       return Object.assign({},state ,{data:action.data},{status:action.status})

    case 'DEPARTURE_CITY':
      return Object.assign({},state ,{departureCity:action.val})

    case 'ARRIVAL_CITY':
     return Object.assign({},state, {arrivalCity:action.val})

    case 'DEPARTURE_DATE':
     return Object.assign({},state,{departureDate:action.val})

    case 'RETURN_DATE':
     return Object.assign({},state,{returnDate:action.val})

     case 'PASSENGERS' :
     return Object.assign({},state,{passengers:action.val})

    default:
      return state

    }
}

