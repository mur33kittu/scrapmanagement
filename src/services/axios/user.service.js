import axios from 'axios';

const updateUserInfo = (jsonData) => {
  return axios
    .post(process.env.REACT_APP_SERVICE_URL + '/user', jsonData)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

export const UserService = {
  updateUserInfo: updateUserInfo,
};
