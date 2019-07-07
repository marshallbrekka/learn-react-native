import * as errors from "./errors"

export class API {
  constructor(baseUrl, authToken, fetchImpl = fetch) {
    this.baseUrl = baseUrl
    this.authToken = authToken
    this.fetch = fetchImpl
  }

  post(endpoint, data) {
    return this._call('POST', endpoint, data)
  }

  get(endpoint) {
    return this._call('GET', endpoint, null)
  }

  _call(method, endpoint, data) {
    let headers = {
      Accept: 'application/json'
    }
    if (this.authToken) {
      headers['Authorization'] = this.authToken
    }

    let options = {
      method: method,
      headers: headers
    }

    if (data) {
      headers['Content-Type'] = 'application/json'
      options['body'] = JSON.stringify(data)
    }

    return this.fetch(`${this.baseUrl}/${endpoint}`, options)
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        }
        return response.text().then((text) => {
          errors.raiseHTTPError(response.status, text)
        })
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          throw new errors.AbortedError(error.message)
        }
        throw(error)
      })
  }
}


// // Fetches an API response and normalizes the result JSON according to schema.
// // This makes every API response have the same shape, regardless of how nested it was.
// const callApi = (method, endpoint, schema) => {
//   const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

//   return fetch(fullUrl)
//     .then(response =>
//       response.json().then(json => {
//         if (!response.ok) {
//           return Promise.reject(json)
//         }

//         const camelizedJson = camelizeKeys(json)
//         const nextPageUrl = getNextPageUrl(response)

//         return Object.assign({},
//           normalize(camelizedJson, schema),
//           { nextPageUrl }
//         )
//       })
//     )
// }


// const uploadProfileImage = (imageUri) => {
  

// }
