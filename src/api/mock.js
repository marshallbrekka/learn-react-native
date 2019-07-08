import {API} from "./index"

const resolvedPromise = (value, ms = 500) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), ms);
  });
}

const rejectedPromise = (value, ms = 500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(value), ms);
  });
}

export default class MockAPI extends API{
  constructor(baseUrl, authToken) {
    super(baseUrl, authToken)
    this._mocks = {}
  }

  registerGet(uri, response) {
    this._mocks[`GET ${uri}`] = response
  }

  registerPost(uri, response) {
    this._mocks[`POST ${uri}`] = response
  }

  _call(method, uri, data) {
    let response = this._mocks[`${method} ${uri}`]
    if (response) {
      if (response instanceof Error) {
        return rejectedPromise(response)
      }
      if (typeof response === 'function') {
        response = response(data)
      }
      return resolvedPromise(response)
    }
    throw new Error(`No mock defined for "${method} ${uri}"`)
  }
}
