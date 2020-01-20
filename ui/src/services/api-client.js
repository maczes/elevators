// a library to wrap and simplify api calls
import apisauce from 'apisauce'

import AppConfig from '../config/app-config'

const create = (baseURL = AppConfig.API_URL) => {

  // Create and configure an apisauce-based api object.
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 5000
  })

  const getElevators = (options) => api.get('/list', options)

  return {
    // a list of the API functions 
    getElevators
  }
}

export default {
  create
}
