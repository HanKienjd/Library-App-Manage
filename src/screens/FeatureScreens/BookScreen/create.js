import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import TopHeaderCustom from 'src/components/layouts/TopHeaderCustom';
import {Icon, Input, Button} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import {styles} from './styles';
const BookCreateScreen = () => {
  const [selectedCatogory, setSelectCatogory] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const pickerRef = useRef();
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
      <TopHeaderCustom name="Tạo sách" />
      <KeyboardAvoidingView style={{flex: 1}} onPress>
        <ScrollView>
          <View style={styles.uploadContainer}>
            <Icon
              name="cloud-upload-outline"
              type="ionicon"
              color="#000"
              size={50}
            />
            <Text style={styles.uploadText}>Upload Image</Text>
          </View>
          <View style={styles.inputContainer}>
            <Input label="Tên sách" />
            <Input label="Tác giả" />
            <Input label="Nhà xuất bản" />
            <Input label="Năm xuất bản" keyboardType="numeric" />
            <Input label="Số lượng" />
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
                value={selectedCatogory}
              />
            </TouchableOpacity>

            <Input label="Ghi chú" />
            <Button containerStyle={styles.buttonContainer} title="Tạo" />
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

export default BookCreateScreen;
