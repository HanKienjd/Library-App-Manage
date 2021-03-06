import ApiService from 'src/api';
export const getDataBooks = async callback => {
  const response = await ApiService.get('books');
  callback(response);
};

export const getDataBooksId = async (id, callback) => {
  const response = await ApiService.get(`books?categoryId=${id}`);
  callback(response);
};

export const createBook = async (data) => {
  const response = await ApiService.post('books', data);
  console.log(response);
}