import rootReducer from './'
import * as ActionTypes from '../actions'

describe('errors reducer', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual({
      errorMessage: null
    })
  })

  it('should handle RESET_ERROR_MESSAGE', () => {
    expect(
      rootReducer({
        errorMessage: "foo"
      }, {
        type: ActionTypes.RESET_ERROR_MESSAGE,
      })
    ).toEqual({
      errorMessage: null
    })
  })

  it('should set an error if there is an error property', () => {
    expect(
      rootReducer({}, {
        type: "WHATEVER",
        error: "This is an error"
      })
    ).toEqual({
      errorMessage: "This is an error"
    })
  })
})
