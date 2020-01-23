import apisauce from 'apisauce'

import AppConfig from '../config/app-config'

const create = (baseURL = AppConfig.API_URL) => {

  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: AppConfig.API_CALL_TIMEOUT_MILLISECONDS
  })

  const getElevators = (params) => api.get('/list', params);
  const moveElevator = (params) => api.get('/move', params);
  const requestElevator = (getElevatorRequest) => api.put('/request', getElevatorRequest);

  const naviMonitor = (response) => console.log('api call tracker: ', response)
  api.addMonitor(naviMonitor)

  return {
    getElevators,
    moveElevator,
    requestElevator
  }
}

export default {
  create
}
