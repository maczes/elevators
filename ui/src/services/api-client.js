import apisauce from 'apisauce';
import AppConfig from '../config/app-config';

const create = (baseURL = AppConfig.API_URL) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
    },
    timeout: AppConfig.API_CALL_TIMEOUT_MILLISECONDS,
  });

  const getElevators = (params) => api.get('/list', params);
  const moveElevator = (payload) => api.put('/move', payload);
  const requestElevator = (payload) => api.put('/request', payload);
  const releaseElevator = (payload) => api.put('/release', payload);
  const naviMonitor = (response) => console.log('api call tracker: ', response);

  api.addMonitor(naviMonitor);

  return {
    getElevators,
    moveElevator,
    requestElevator,
    releaseElevator,
  };
};

export default {
  create,
};
