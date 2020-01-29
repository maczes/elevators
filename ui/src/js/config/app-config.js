/**
 * Application wide configuration file. Can be customized for specific env in future with
 * react-native-config or simillar
 */
export default {
  NUMBER_OF_ELEVATORS: Number(4),
  NUMBER_OF_FLOORS: Number(6),
  API_URL: 'http://10.0.2.2:8080/elevator/api/v1',
  API_CALL_TIMEOUT_MILLISECONDS: 5000,
};
