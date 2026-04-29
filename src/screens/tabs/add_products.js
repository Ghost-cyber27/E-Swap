import {useState} from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    Image, 
    TextInput
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Ionicons } from '@expo/vector-icons';

export default function AddProducts(){
    const [image, setImage] = useState(null);
    return(
        <View style={styles.container}>
            <View style={styles.imgView}>
                {image 
                ? (
                    <Image style={styles.img} source={{ uri: image }} />
                ) 
                : (
                    <TouchableOpacity style={styles.notImg}>
                        <Ionicons name='image-sharp' size={100} />
                    </TouchableOpacity>
                )
                }
            </View>
            <View style={styles.inputView}>
                <TextInput 
                placeholder='Product Name' 
                style={styles.textInput} />
                <TextInput 
                placeholder='Product Price' 
                style={styles.textInput} 
                keyboardType='number-pad'
                />
                <TextInput 
                placeholder='Product Description' 
                style={styles.textInput}
                multiline
                />
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Add Product</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    imgView: {
        margin: 5,
        marginTop: hp('3%')
    },
    img: {
        width: wp('90%'),
        height: hp('40%'),
        resizeMode: 'cover',
        borderRadius: 10
    },
    notImg: {
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('90%'),
        height: hp('40%'),
        borderRadius: 10,
        backgroundColor: '#f0f0f0'
    },
    inputView: {
        marginTop: hp('2%'),
        gap: hp('1%')
    },
    textInput: {
        borderWidth: 1, 
        width: wp('90%'), 
        height: hp('5%'),
        padding: 10, 
        borderRadius: 5
    },
    btn: {
        width: wp('90%'),
        height: hp('5%'),
        backgroundColor: '#2596be',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
});