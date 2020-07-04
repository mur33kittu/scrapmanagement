import axios from 'axios';

const getOfferedServices = () => {
  return axios
    .get(process.env.REACT_APP_SERVICE_URL + '/servicesoffered')
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

export const ServicesOfferedService = {
  getOfferedServices: getOfferedServices,
};
