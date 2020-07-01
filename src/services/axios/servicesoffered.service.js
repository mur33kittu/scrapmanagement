import axios from 'axios';

const getOfferedServices = () => {
  return axios
    .get('/api/servicesoffered')
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
