import ApiService from 'src/api';
export const apiSearch = async (value, callback) => {
  await ApiService.get(`search?query=${value}`).then(data => {
    callback(data);
  });
};
