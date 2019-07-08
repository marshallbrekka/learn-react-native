import MockAPI from "./mock"

const basePath = 'user'

const baseMockProfile = {
  email: "user@email.com",
  firstName: "Cat",
  lastName: "Cai",
  dateOfBirth: "1980-10-20",
  profileUri: "http://foo/bar.jpg",
  galleryUris: [
    "http://foo/bar.jpg",
    "http://foo/bar.jpg"
  ]
}

export default class User {
  constructor(api) {
    this.api = api

    if (api instanceof MockAPI) {
      api.registerPost(`${basePath}/auth/start`, {})
      api.registerPost(`${basePath}/auth/verify`, (data) => {
        return {email: data['email']}
      })

      api.registerGet(`${basePath}/me`, baseMockProfile)
      api.registerPost(`${basePath}/me`, (data) => {
        return new Map([baseMockProfile, data])
      })
    }
  }

  startAuth(email) {
    return this.api.post(`${basePath}/auth/start`, {email: email})
  }

  completeAuth(email, code) {
    return this.api.post(`${basePath}/auth/verify`, {
      email: email,
      code: code,
    })
  }

  updateProfile(attributes) {
    return this.api.post(`${basePath}/me`, attributes)
  }

  getProfile() {
    return this.api.get(`${basePath}/me`)
  }
}
