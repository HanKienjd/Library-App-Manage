import Config from 'react-native-config';
function ImageResize(image) {
  return `${Config.API_URL}/uploads/${image}`;
}
export default ImageResize;
