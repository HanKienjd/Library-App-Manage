import ApiService from 'src/api';
export const createCategory = async (data, callback) => {
  const response = await ApiService.post('books', data);
  callback(response);
}