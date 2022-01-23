import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import {palette} from 'src/theme/color';
import {Card, Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');
const CheckoutDetailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          type="ionicon"
          name="arrow-back-outline"
          size={30}
          color="#fff"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}> Thông tin phiếu mượn</Text>
      </View>
      <ScrollView>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={4}>
          <View style={styles.content}>
            <Card containerStyle={styles.containerCard}>
              <View style={styles.cardContent}>
                <Card.Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1644530633761-094c893a6558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                  }}
                  style={styles.image}
                  containerStyle={styles.imageContainer}
                />
                <View>
                  <Text>#9902</Text>
                  <Text style={styles.contentTitle}>Tình yêu và thù hận</Text>
                  <Text style={styles.text_name}>Lê Học Hoàng Anh</Text>
                </View>
              </View>
            </Card>
            <Card containerStyle={styles.containerCard}>
              <View style={styles.infoContainer}>
                <Text style={styles.text_name}>Mã bạn đọc</Text>
                <Text style={styles.text_name}>111111111</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.text_name}>Tên bạn đọc</Text>
                <Text style={styles.text_name}>Lê Học Hoàng Anh</Text>
              </View>
            </Card>
            <View style={styles.containerBottom}>
              <View style={styles.infoContainer}>
                <Text style={styles.text_name}>Ngày mượn</Text>
                <Text style={styles.text_name}>Ngày mượn</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.text_name}>Ngày hẹn trả</Text>
                <Text style={styles.text_name}>19/12/2021</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.text_name}>Tình trạng</Text>
                <Text style={styles.text_name}>Chưa trả</Text>
              </View>
              <Text>Ghi chú:</Text>
              <TextInput
                style={styles.input}
                numberOfLines="4"
                multiline={true}
              />
              <Button
                title="Trả sách"
                buttonStyle={styles.button}
                style={styles.buttonContainer}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default CheckoutDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: palette.THEME,
  },
  headerTitle: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    lineHeight: 26,
  },
  imageContainer: {
    borderRadius: 10,
    width: 100,
    height: 100,
  },
  containerCard: {
    borderRadius: 15,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 26,
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'right',
    marginBottom: 10,
  },
  text_name: {
    fontSize: 16,
    lineHeight: 20,
  },
  input: {
    height: 150,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  containerBottom: {
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginVertical: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
  },
  buttonContainer: {
    marginTop: 10,
  },
  button: {
    borderRadius: 10,
  },
});
