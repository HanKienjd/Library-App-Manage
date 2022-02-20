import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import ActionButton from 'react-native-action-button';
import { Icon, Button, Input, Image } from 'react-native-elements';
import TopHeaderCustom from 'src/components/layouts/TopHeaderCustom';
import ImageResize from 'src/utils';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';
import { getDataBooksId } from 'src/api/apiBook';
import ApiService from 'src/api';

const BookDetailScreen = ({ route }) => {
    const { id } = route.params;
    const [selectedCatogory, setSelectCatogory] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [detailBook, setDetailBook] = useState([]);
    const pickerRef = useRef();
    const onAction = ({ key }) => {
        console.log('key', key);
    };
    function open() {
        setIsVisible((currentValue) => !currentValue);
    }
    function close() {
        pickerRef.current.blur();
    }
    const onSelectPicker = (item) => {
        setSelectCatogory(item);
        close();
    };

    const fetchDetailBook = async () => {
        const response = await ApiService.get('books/' + id);
        if (response) {
            setDetailBook(response);
        } else {
            alert('Xẩy ra lỗi');
        }
        
    }

    const switchValue = () => {
        switch (detailBook.categoryId) {
            case '1':
                return 'General Knowledge';
            case '2':
                return 'Philosophy and Psychology';
            default:
                return '';
        }
    }

    useEffect(() => {
        if (id && id > 0) {
            fetchDetailBook();
        }
    }, [id]);
    
    return (
        <View style={styles.container}>
            <TopHeaderCustom name="Chi tiết sách" />
            <KeyboardAvoidingView style={{ flex: 1 }} onPress>
                <ScrollView>
                    {detailBook && (
                        <View>
                            <Image
                                source={{ uri: ImageResize(detailBook.image) }}
                                containerStyle={styles.imageContainer}
                                style={styles.image}
                                onPress={() => console.log('changeImage')}
                            >
                                <View style={styles.iconContainerCenter}>
                                    <Icon name="camera" type="material-community" color="#fff" size={30} />
                                </View>
                            </Image>
                            <View style={styles.inputContainer}>
                                <Input label="Tên sách" value={detailBook.name} />
                                <Input label="Tác giả" value={detailBook.author}/>
                                <Input label="Nhà xuất bản" value="Thanh Niên" />
                                <Input label="Năm xuất bản" keyboardType="numeric" value={`${detailBook.yearRelease}`} />
                                <Input label="Số lượng" value={detailBook.quantity} />
                                <TouchableOpacity
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '100%',
                                    }}
                                >
                                    <Input
                                        label="Danh mục"
                                        placeholder="Chọn danh mục"
                                        disabled={true}
                                        value={switchValue()}
                                    />
                                </TouchableOpacity>

                                <Input label="Ghi chú" />
                                <TouchableOpacity onPress={() => console.log('Mượn sách')}>
                                    <Button containerStyle={styles.buttonContainer} title="Đăng kí mượn" />
                                </TouchableOpacity>
                            </View>
                        </View>
 
                    )}
                   
                </ScrollView>
            </KeyboardAvoidingView>
            <ActionButton buttonColor="#9b59b6" style={{ bottom: 50 }}>
                <ActionButton.Item buttonColor="#3498db" title="Edit" onPress={() => onAction({ key: 'edit' })}>
                    <Icon name="md-create" style={styles.actionButtonIcon} type="ionicon" color="#fff" />
                </ActionButton.Item>
                <ActionButton.Item
                    buttonColor="rgba(231,76,60,1)"
                    title="Delete"
                    onPress={() => onAction({ key: 'delete' })}
                >
                    <Icon name="delete" style={styles.actionButtonIcon} type="antdesign" color="#fff" />
                </ActionButton.Item>
            </ActionButton>
            {isVisible && (
                <View>
                    <TouchableOpacity
                        onPress={() => setIsVisible(false)}
                        style={{ justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Icon type="antdesign" name="minus" size={40} />
                    </TouchableOpacity>
                    <Picker
                        ref={pickerRef}
                        selectedValue={selectedCatogory}
                        onValueChange={(itemValue) => onSelectPicker(itemValue)}
                    >
                        <Picker.Item label="General Knowledge" value="1" />
                        <Picker.Item label="Philosophy and Psychology" value="2" />
                    </Picker>
                </View>
            )}
        </View>
    );
};

export default BookDetailScreen;
