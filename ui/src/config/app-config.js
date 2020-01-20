import Config from 'react-native-config'

export default {
    NUMBER_OF_ELEVATORS: parseInt(`${Config.NUMBER_OF_ELEVATORS || 4}`),
    NUMBER_OF_FLOORS: parseInt(`${Config.NUMBER_OF_FLOORS || 6}`),
    API_URL: `${Config.API_URL || 'http://10.0.2.2:8080/elevator/api/v1'}`,
}

