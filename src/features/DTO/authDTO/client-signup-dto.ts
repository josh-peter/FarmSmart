


export interface ClientSignUpDTO{
  name: {
    firstName: string,
    otherNames: string,
  },
  email: string,
  phoneNumber: string,
  password: string,
  dob: any,
  address: {
    name: string,
    city: string,
    state: string,
    placeId: string,
    coordinate: {
      type: any,
      coordinates: [
        {}
      ]
    }
  },
  device: string,
  location: {
    name: string,
    city: string,
    state: string,
    placeId: string,
    coordinate: {
      type: any,
      coordinates: [
        {}
      ]
    }
  }
}