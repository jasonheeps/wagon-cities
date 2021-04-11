// TODO: add and export your own actions
import cities from '../../data/cities';

export function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}

export function setActiveCity(city) {
  return {
    type: 'ACTIVE_CITY',
    payload: city
  };
}
