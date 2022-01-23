import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import ActionButton from 'react-native-action-button';
import {Icon, Button, Input, Image} from 'react-native-elements';
import TopHeaderCustom from 'src/components/layouts/TopHeaderCustom';
import ImageResize from 'src/utils';
import {Picker} from '@react-native-picker/picker';
import {styles} from './styles';

const BookDetailScreen = ({route}) => {
  const {id} = route.params;
  const [selectedCatogory, setSelectCatogory] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const pickerRef = useRef();
  const onAction = ({key}) => {
    console.log('key', key);
  };
  function open() {
    setIsVisible(currentValue => !currentValue);
  }
  function close() {
    pickerRef.current.blur();
  }
  const onSelectPicker = item => {
    setSelectCatogory(item);
    close();
  };
  return (
    <View style={styles.container}>
      <TopHeaderCustom name="Chi tiết sách" />
      <KeyboardAvoidingView style={{flex: 1}} onPress>
        <ScrollView>
          {/* <View style={styles.uploadContainer}>
            <Icon
              name="cloud-upload-outline"
              type="ionicon"
              color="#000"
              size={50}
            />
            <Text style={styles.uploadText}>Upload Image</Text>
          </View> */}
          <Image
            source={{uri: ImageResize('10.jpg')}}
            containerStyle={styles.imageContainer}
            style={styles.image}
            onPress={() => console.log('changeImage')}>
            <View style={styles.iconContainerCenter}>
              <Icon
                name="camera"
                type="material-community"
                color="#fff"
                size={30}
              />
            </View>
          </Image>
          <View style={styles.inputContainer}>
            <Input label="Tên sách" value="Liêu trai chín dị" />
            <Input label="Tác giả" value="Bồ Tùng Linh" />
            <Input label="Nhà xuất bản" value="Thanh Niên" />
            <Input label="Năm xuất bản" keyboardType="numeric" value="2010" />
            <Input label="Số lượng" value="10" />
            <TouchableOpacity
              // onPress={() => open()}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}>
              <Input
                label="Danh mục"
                placeholder="Chọn danh mục"
                disabled={true}
                value={selectedCatogory}
              />
            </TouchableOpacity>

            <Input label="Ghi chú" />
            <TouchableOpacity onPress={() => console.log('Mượn sách')}>
              <Button
                containerStyle={styles.buttonContainer}
                title="Đăng kí mượn"
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <ActionButton buttonColor="#9b59b6" style={{bottom: 50}}>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Edit"
          onPress={() => onAction({key: 'edit'})}>
          <Icon
            name="md-create"
            style={styles.actionButtonIcon}
            type="ionicon"
            color="#fff"
          />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="rgba(231,76,60,1)"
          title="Delete"
          onPress={() => onAction({key: 'delete'})}>
          <Icon
            name="delete"
            style={styles.actionButtonIcon}
            type="antdesign"
            color="#fff"
          />
        </ActionButton.Item>
      </ActionButton>
      {isVisible && (
        <View>
          <TouchableOpacity
            onPress={() => setIsVisible(false)}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Icon type="antdesign" name="minus" size={40} />
          </TouchableOpacity>
          <Picker
            ref={pickerRef}
            selectedValue={selectedCatogory}
            onValueChange={itemValue => onSelectPicker(itemValue)}>
            <Picker.Item label="General Knowledge" value="1" />
            <Picker.Item label="Philosophy and Psychology" value="2" />
          </Picker>
        </View>
      )}
    </View>
  );
};

export default BookDetailScreen;
