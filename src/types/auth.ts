export interface LoginResponse {
  token: string
}

export interface LoginRequest {
  username: string
  password: string
}

export interface SignUpRequest {
  email: string
  username: string
  password: string
  name: {
    firstname: string
    lastname: string
  }
  address: {
    city: string
    street: string
    number: 3
    zipcode: string
    geolocation: {
      lat: string
      long: string
    }
  }
  phone: string
}

export interface SignUpResponse {
  id: number
  email: string
  username: string
  password: string
  name: {
    firstname: string
    lastname: string
  }
  address: {
    city: string
    street: string
    number: 3
    zipcode: string
    geolocation: {
      lat: string
      long: string
    }
  }
  phone: string
}
