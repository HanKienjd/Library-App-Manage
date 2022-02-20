import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import TopHeaderCustom from 'src/components/layouts/TopHeaderCustom';
import { Icon, Input, Button , Image} from 'react-native-elements';
import { launchImageLibrary } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';
import ApiService from 'src/api';
import { styles } from './styles';

const createFormData = (photo, body = {}) => {
  const data = new FormData();

  data.append('imageBook', {
    name: photo.assets[0].fileName,
    type: photo.assets[0].type,
    uri: Platform.OS === 'ios' ? photo.assets[0].uri.replace('file://', '') : photo.assets[0].uri,
  });

  Object.keys(body).forEach((key) => {
    data.append(key, body[key]);
  });

  return data;
};

const BookCreateScreen = () => {
  const [selectedCategory, setSelectCategory] = useState();
  console.log("🚀 ~ file: create.js ~ line 33 ~ BookCreateScreen ~ selectedCategory", selectedCategory)
  const [isVisible, setIsVisible] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState(null);
  const [author, setAuthor] = useState(null);
  const [yearRelease, setYearRelease] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [publisher, setPublisher] = useState(null);
  const [note, setNote] = useState(null);
  const pickerRef = useRef();
  function open() {
    setIsVisible(currentValue => !currentValue);
  }
  function close() {
    pickerRef.current.blur();
  }

  const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, (response) => {
      if (response) {
        setPhoto(response);
      }
    });
  }

  const onSelectPicker = item => {
    setSelectCategory(item);
    close();
  };

  const switchValue = () => {
    switch (selectedCategory) {
      case '1':
        return 'General Knowledge';
      case '2':
        return 'Philosophy and Psychology';
      default:
        return '';
    }
  }

  const resetState = () => {
    setPhoto(null);
    setName(null);
    setAuthor(null);
    setYearRelease(null);
    setQuantity(null);
    setPublisher(null);
    setNote(null);
  }

  const onHandleSubmit = async () => {
    const data = createFormData(photo, {
      name,
      author,
      yearRelease,
      quantity,
      categoryId: selectedCategory,
    });
    const result = await ApiService.post('books', data);
    if (result === 201) {
      alert('Thêm thành công');
      resetState();
    } else {
      alert('Thêm thất bại');
    }
  }
  return (
    <View style={styles.container}>
      <TopHeaderCustom name="Tạo sách" />
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView>
          {photo ? (
            <View style={styles.imageUploads}>
              <Image source={{ uri: photo.assets[0].uri }} style={styles.imageItem} />
            </View>) : (
              <TouchableOpacity onPress={handleChoosePhoto}>
                <View style={styles.uploadContainer}>
                  <Icon
                    name="cloud-upload-outline"
                    type="ionicon"
                    color="#000"
                    size={50}
                  />
                  <Text style={styles.uploadText}>Upload Image</Text>
                </View>
              </TouchableOpacity>
            )
          }
          
          <View style={styles.inputContainer}>
            <Input label="Tên sách" onChangeText={(value) => setName(value)} />
            <Input label="Tác giả" onChangeText={value => setAuthor(value)}/>
            <Input label="Nhà xuất bản" onChangeText={value => setPublisher(value)}/>
            <Input label="Năm xuất bản" keyboardType="numeric" onChangeText={value => setYearRelease(value)}/>
            <Input label="Số lượng" onChangeText={value => setQuantity(value)}/>
            <TouchableOpacity
              onPress={() => open()}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}>
              <Input
                label="Danh mục"
                placeholder="Chọn danh mục"
                disabled={true}
                value={switchValue()}
              />
            </TouchableOpacity>

            <Input label="Ghi chú" onChangeText={value => setNote(value)}/>
            <Button containerStyle={styles.buttonContainer} title="Tạo" onPress={onHandleSubmit}/>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {isVisible && (
        <View>
          <TouchableOpacity
            onPress={() => setIsVisible(false)}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Icon type="antdesign" name="minus" size={40} />
          </TouchableOpacity>
          <Picker
            ref={pickerRef}
            selectedValue={selectedCategory}
            onValueChange={itemValue => onSelectPicker(itemValue)}>
            <Picker.Item label="General Knowledge" value="1" />
            <Picker.Item label="Philosophy and Psychology" value="2" />
          </Picker>
        </View>
      )}
    </View>
  );
};

export default BookCreateScreen;
