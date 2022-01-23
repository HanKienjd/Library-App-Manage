import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import TopHeaderCustom from 'src/components/layouts/TopHeaderCustom';
import {Icon, Input, Button} from 'react-native-elements';
const CategoryCreateScreen = () => {
  return (
    <View style={styles.container}>
      <TopHeaderCustom name="Tạo Danh mục" />
      <View style={styles.uploadContainer}>
        <Icon
          name="cloud-upload-outline"
          type="ionicon"
          color="#000"
          size={50}
        />
        <Text style={styles.uploadText}>Upload File</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input label="Tên danh mục" />
        <Button containerStyle={styles.buttonContainer} title="Tạo" />
      </View>
    </View>
  );
};

export default CategoryCreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  uploadContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 5,
    height: 100,
    borderStyle: 'dotted',
  },
  inputContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 200,
    borderRadius: 10,
  },
});
