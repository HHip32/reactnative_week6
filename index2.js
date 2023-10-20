import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native';
import index1 from './index1';

export default function index2({navigation}) {
    const colorData = [
        { color: '#C5F1FB', image: require('./assets/vs_silver.png') },
        { color: '#F30D0D', image: require('./assets/vs_red.png') },
        { color: '#000000', image: require('./assets/vs_black.png') },
        { color: '#234896', image: require('./assets/vs_blue1.png') },
    ];
    const [selectedColor, setSelectedColor] = useState('#234896');
    const handleColorChange = (color) => {
        setSelectedColor(color);
    };
    const getImageForColor = () => {
        const selectedColorData = colorData.find(item => item.color === selectedColor);
        if (selectedColorData) {
            return selectedColorData.image;
        }
        return require('./assets/vs_blue1.png');
    };

    return (
        <View style={styles.container}>
            <View style={{ width: 320, height: 155, flexDirection: 'row' }}>
                <Image style={{ width: 122, height: 155 }} source={getImageForColor()} />
                <Text style={{ width: 164, height: 36, marginTop: 25, marginLeft: 20, fontFamily: 'Roboto', fontWeight: 400, fontSize: 15, lineHeight: 17.58, color: '#000000' }}>
                    Điện Thoại Vsmart Joy 3
                    Hàng chính hãng
                </Text>
            </View>
            <View style={{ width: 390, height: 500, backgroundColor: '#C4C4C4' }}>
                <Text>
                    Chọn một màu bên dưới:
                </Text>
                <View style={{ width: 390, alignItems: 'center' }}>
                    {colorData.map((colorItem) => (
                        <Pressable
                            key={colorItem.color}
                            style={{ width: 85, height: 85, marginTop: 10, backgroundColor: colorItem.color }}
                            onPress={() => handleColorChange(colorItem.color)}
                        />
                    ))}
                </View>
                <View style={{ width: 390, alignItems: 'center', marginTop: 20 }}>
                    <Pressable
                        style={{ width: 350, height: 44, borderWidth: 1, borderBlockColor: '#CA1536', borderRadius: '10px', backgroundColor: '#1952E294', alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => {
                            navigation.navigate('index1', { 
                                selectedImage: getImageForColor
                            })
                        }}
                    >
                        <Text style={{ width: 75, height: 23, fontFamily: 'Roboto', fontWeight: 700, fontSize: 20, lineHeight: 23.44 }}>XONG</Text>
                    </Pressable>
                </View>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center'
    },
})