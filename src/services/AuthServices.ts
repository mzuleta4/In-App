import axios from 'axios';

const http = axios.create({
  baseURL: 'http://6960717be0be.ngrok.io'
});

export const signUpService = (email: string, password: string) => {
  return http.post('/signup', {email, password}).then(
    res => res.data
  )
}

export const signinService = (email: string, password: string) => {
  return http.post('/signin', {email, password}).then(
    res => res.data
  )
}