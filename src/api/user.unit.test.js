import {MockAPI} from "./mock"
import User from "./user"

describe("User", () => {
  var mockAPI
  var userAPI

  beforeEach(() => {
    mockAPI = {
      get: jest.fn(),
      post: jest.fn(),
    }
    userAPI = new User(mockAPI)
  })

  describe("startAuth", () => {
    beforeEach(() => { userAPI.startAuth('foo@bar.com') })

    it("sets the correct endpoint", () => {
      expect(mockAPI.post.mock.calls[0][0]).toBe('user/auth/start')
    })

    it("sets the correct payload", () => {
      expect(mockAPI.post.mock.calls[0][1]).toEqual({email: 'foo@bar.com'})
    })
  })

  describe("completeAuth", () => {
    beforeEach(() => { userAPI.completeAuth('foo@bar.com', '123456') })

    it("sets the correct endpoint", () => {
      expect(mockAPI.post.mock.calls[0][0]).toBe('user/auth/verify')
    })

    it("sets the correct payload", () => {
      expect(mockAPI.post.mock.calls[0][1]).toEqual({email: 'foo@bar.com', code: '123456'})
    })
  })

  describe("getProfile", () => {
    beforeEach(() => { userAPI.getProfile() })

    it("sets the correct endpoint", () => {
      expect(mockAPI.get.mock.calls[0][0]).toBe('user/me')
    })
  })

  describe("updateProfile", () => {
    beforeEach(() => { userAPI.updateProfile({firstName: 'Cat'}) })

    it("sets the correct endpoint", () => {
      expect(mockAPI.post.mock.calls[0][0]).toBe('user/me')
    })

    it("sets the correct payload", () => {
      expect(mockAPI.post.mock.calls[0][1]).toEqual({firstName: 'Cat'})
    })
  })
})
