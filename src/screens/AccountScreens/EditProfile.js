import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Input, Button} from 'react-native-elements';
import {styles} from './styles';
const EditProfile = () => {
  return (
    <View>
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
          <Input label="Danh mục" placeholder="Chọn danh mục" disabled={true} />
        </TouchableOpacity>

        <Input label="Ghi chú" />
        <TouchableOpacity onPress={() => console.log('Mượn sách')}>
          <Button
            containerStyle={styles.buttonContainer}
            title="Đăng kí mượn"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;
