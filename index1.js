import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Alert, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import index2 from './index2';
const index1 = () => {
    const route = useRoute();
    const selectedColor = route.params ? route.params.selectedColor : '#234896';
    const [productImage, setProductImage] = useState(require('./assets/vs_blue.png'));
    useEffect(() => {
        const colorData = [
            { color: '#C5F1FB', image: require('./assets/vs_silver.png') },
            { color: '#F30D0D', image: require('./assets/vs_red.png') },
            { color: '#000000', image: require('./assets/vs_black.png') },
            { color: '#234896', image: require('./assets/vs_blue1.png') },
        ];

        const selectedColorData = colorData.find(item => item.color === selectedColor);
        if (selectedColorData) {
            setProductImage(selectedColorData.image);
        }
        console.log('Selected Color:', selectedColor);
    }, [selectedColor]);
    const navigation = useNavigation();
    const handleTranform = () => {
        navigation.navigate(index2)
    };
    return (

        <View style={styles.container}>
            <View style={{ width: 350, height: 400, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 350, height: 400 }} source={productImage} />
            </View>
            <View style={{ width: 288, height: 20 }}>
                <Text style={{ width: 288, height: 18, fontFamily: 'Roboto', fontWeight: 700, fontSize: 15, lineHeight: 17.58, color: '#000000' }}>
                    Điện Thoại Vsmart Joy 3 - Hàng chính hãng
                </Text>
            </View>
            <View style={{ width: 288, height: 30, marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ width: 130, height: 25, flexDirection: 'row', }}>
                    <Image style={{ width: 25, height: 25, }} source={require('./assets/start1.png')} />
                    <Image style={{ width: 25, height: 25, }} source={require('./assets/start2.png')} />
                    <Image style={{ width: 25, height: 25, }} source={require('./assets/start3.png')} />
                    <Image style={{ width: 25, height: 25, }} source={require('./assets/start4.png')} />
                    <Image style={{ width: 25, height: 25, }} source={require('./assets/start5.png')} />
                </View>
                <Text style={{ width: 135, height: 18, fontFamily: 'Roboto', fontWeight: 400, fontSize: 15, lineHeight: 17.58, color: '#000000', textAlign: 'center' }}>(Xem 828 đánh giá)</Text>
            </View>
            <View style={{ marginTop: 10, width: 250, height: 18, right: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ width: 99, height: 21, fontFamily: 'Roboto', fontWeight: 700, fontSize: 18, lineHeight: 21.09, color: '#000000' }}>
                    1.790.000 đ
                </Text>
                <Text style={{ width: 83, height: 18, textDecorationLine: 'line-through', fontFamily: 'Roboto', fontWeight: 700, fontSize: 15, lineHeight: 17.58, color: '#00000094' }}>
                    1.790.000 đ
                </Text>
            </View>
            <View style={{ width: 190, height: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, right: 45 }}>
                <Text style={{ width: 166, height: 14, fontFamily: 'Roboto', fontWeight: 700, fontSize: 12, lineHeight: 14.06, color: '#FA0000', textAlign: 'center' }}>
                    Ở ĐÂU RẺ HƠN HOÀN TIỀN
                </Text>
                <View style={{ width: 20, height: 20 }}>
                    <Image style={{ width: 20, height: 20 }} source={require('./assets/group1.png')} />
                </View>
            </View>
            <Pressable
                style={{ marginTop: 40, width: 280, height: 34, borderWidth: 1, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                onPress={handleTranform}
            >
                <Text style={{ width: 230, height: 18, fontFamily: 'Roboto', fontWeight: 700, fontSize: 15, lineHeight: 17.58, color: '#000000', textAlign: 'center' }}>
                    4 MÀU-CHỌN MÀU
                </Text>
                <Image style={{ width: 11.5, height: 14 }} source={require('./assets/vector.png')} />
            </Pressable>
            <Pressable style={{ marginTop: 30, width: 288, height: 44, backgroundColor: '#EE0A0A', borderWidth: 1, borderRadius: 10, borderColor: '#CA1536', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ width: 135, height: 23, fontFamily: 'Roboto', fontWeight: 700, fontSize: 20, lineHeight: 23.44, color: '#F9F2F2', textAlign: 'center' }}>
                    CHỌN MUA
                </Text>
            </Pressable>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000000',
    }


})
export default index1;