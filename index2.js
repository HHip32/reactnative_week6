import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function index2() {

    return (
        <View style={styles.container}>
            <View style={{ width: 320, height: 155, flexDirection: 'row'}}>
                <Image style={{ width: 112, height: 155 }} source={require('./assets/vs_blue.png')} />
                <Text style={{ width: 164, height: 36, marginTop: 25, marginLeft: 20, fontFamily: 'Roboto', fontWeight: 400, fontSize: 15, lineHeight: 17.58, color: '#000000' }}>
                    Điện Thoại Vsmart Joy 3
                    Hàng chính hãng
                </Text>

            </View>
            <View style={{width:390, height:500, backgroundColor:'#C4C4C4'}}>
                    <Text>
                        Chọn một màu bên dưới:
                    </Text>
                </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center'
    },
})