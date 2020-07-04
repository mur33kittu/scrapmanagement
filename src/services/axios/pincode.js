import axios from 'axios';

const getPincodes = () => {
  return axios
    .get(process.env.REACT_APP_SERVICE_URL + '/pincode')
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

export const PinCodeService = {
    getPincodes: getPincodes,
};
