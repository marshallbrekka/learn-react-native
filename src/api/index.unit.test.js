import 'isomorphic-fetch'

import {API} from "./index"
import * as errors from "./errors"


describe('API', () => {
  var fetchRequest
  var fetchResolve
  var fetchReject
  var api

  beforeEach(() => {
    var fetchPromise = new Promise((resolve, reject) => {
      fetchResolve = resolve
      fetchReject = reject
    })
    api = new API('http://base', null, (uri, options) => {
      fetchRequest = {uri: uri, options: options}
      return fetchPromise
    })
  })

  afterEach(() => {
    api = null
    fetchRequest = null
    fetchResolve = null
    fetchReject = null
  })

  describe('_call', () => {
    var response
    beforeEach( () => {
      response = api._call('GET', 'foo', null)
    })

    it('sets the basic options without a body', () => {
      api._call('POST', 'foo', null)

      expect(fetchRequest.options).toEqual({
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
      })
    })

    it('sets the Content-Type header with a body', () => {
      api._call('POST', 'foo', {foo: 'bar'})

      expect(fetchRequest.options).toMatchObject({
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
    })

    it('encodes the body as JSON', () => {
      api._call('POST', 'foo', {foo: 'bar'})

      expect(JSON.parse(fetchRequest.options.body)).toEqual({
        foo: 'bar'
      })
    })
    
    it('parses a 200 as JSON', () => {
      fetchResolve(new Response(JSON.stringify({foo: 'bar'}, {status: 200})))

      expect.assertions(1);
      return response.then((data) => {
        expect(data).toEqual({foo: 'bar'})
      })
    })

    it('raises an error on non 200 status', () => {
      fetchResolve(new Response('Oh no', {status: 401}))

      expect.assertions(1);
      return response.catch((err) => {
        expect(err).toEqual(new errors.UnauthenticatedError('Oh no'))
      })
    })
  })
  
  describe('get', () => {
    it('sets the expected uri', () => {
      api.get('foo')

      expect(fetchRequest.uri).toEqual('http://base/foo')
    })

    it('uses the GET method', () => {
      api.post('foo', {})            

      expect(fetchRequest.options).toMatchObject({
        method: 'POST'
      })
    })
  })

  describe('post', () => {
    it('sets the expected uri', () => {
      api.post('foo', {})               

      expect(fetchRequest.uri).toEqual('http://base/foo')
    })

    it('uses the POST method', () => {
      api.post('foo', {})            

      expect(fetchRequest.options).toMatchObject({
        method: 'POST'
      })
    })
  })
})
