import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchTodos from '../client/actions/thunkAction'
import * as types from '../client/constants/ActionTypes'
import fetchMock from 'fetch-mock'
import data from '../client/mock-data/index.json'
 

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates FETCH_FLIGHT_SUCCESS when fetching FlightData has been done', () => {
    fetchMock
      .getOnce('http://localhost:80/set', 
      {  body: JSON.stringify(data),
    status: 200,
    statusText: 'OK',
    headers: {'Content-Type': 'application/json'},
    sendAsJson: false
}, {
    method: 'GET'
})
       .catch(unmatchedUrl => {
    // fallover call original fetch, because fetch-mock treats
    // any unmatched call as an error - its target is testing
    console.log(unmatchedUrl)
  })


    const expectedActions = [
      { type: types.LOADING_DATA, status:true },
       { type: types.SUBMIT, val:true },
      { type: types.LOADED_DATA, data: {data:[[],[]],status:false} }
    ]
    const store = mockStore()

    return store.dispatch(fetchTodos()).then(() => {
      // return of async actions
      expect(store.getActions()).to.eql(expectedActions)
    })
  })
})