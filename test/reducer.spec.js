import reducer from '../client/reducers'
import * as types from '../client/constants/ActionTypes'

describe('flights reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.eql(
      {
        departureCity:'',
        arrivalCity:'',
        departureDate:'',
        returnDate:'',
        leftRange:0,
        passengers:'',
        rightRange:10000,
        submitClicked:false,
        tabSelected:'oneWay',

      }
    )
})
it('should handle DepartureDate Set', () => {
    expect(
      reducer([], {
        type: types.DEPARTURE_DATE,
        val: '3/11/2017'
      })
    ).to.eql(
      {
       departureDate:'3/11/2017'
        
      }
    )

})
it('should handle ReturnDate Set', () => {
    expect(
      reducer([], {
        type: types.RETURN_DATE,
        val: '7/11/2017'
      })
    ).to.eql(
      {
       returnDate:'7/11/2017'
        
      }
    )

})

})
