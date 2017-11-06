import * as actions from '../client/actions'
import * as types from '../client/constants/ActionTypes'

describe('actions', () => {
  it('should create an action to add a departureDate', () => {
    const val = '22/12/2017'
    const expectedAction = {
      type: types.DEPARTURE_DATE,
      val
    }
   
    expect(actions.setDepartureDate(val)).to.eql(expectedAction)
  })
  it('should create an action to add a returnDate', () => {
    const val = '22/12/2017'
    const expectedAction = {
      type: types.RETURN_DATE,
      val
    }
   
    expect(actions.setReturnDate(val)).to.eql(expectedAction)
  })
  it('should create an action to add a Data', () => {
    const data = 'randomText'
    const expectedAction = {
      type: types.LOADED_DATA,
      data
    }
   
    expect(actions.dataLoaded(data)).to.eql(expectedAction)
  })
})