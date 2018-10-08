import axios from 'axios'

export const instance = axios.create({
    baseURL: '/',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
})