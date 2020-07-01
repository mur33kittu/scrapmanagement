import axios from 'axios';

const getPincodes = () => {
  return axios
    .get('/api/pincode')
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
