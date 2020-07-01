import axios from 'axios';

const updateUserInfo = (jsonData) => {
  return axios
    .post('/api/user', jsonData)
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
