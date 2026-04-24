import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { CustomButton } from "../../components/component";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default function ForgotPassword(){
    const navigation = useNavigation();

    const fpass = () => {
        alert("Forgot Password");
    }
    return(
        <View style={styles.container}>
            <View style={{ margin: 10, marginTop: hp('3%') }}>
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={'white'} />
                </TouchableOpacity>
            </View>
            <View>
                <View style={{margin: 10, marginTop: 70}}>
                    <Text style={{ fontSize: 30 }}>Forgot Password</Text>
                </View>
                <View style={styles.inputView}>
                    <Text style={{ fontSize: 20 }}>Email</Text>
                    <TextInput
                        placeholder='email@example.com'
                        style={styles.textInput}
                    />
                    <CustomButton title='Send' onPress={fpass} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    inputView: {
        margin: 10,
        padding: 10,
        gap: 10,
    },
    textInput: {
        width: wp('90%'),
        height: hp('6%'),
        borderWidth: 2,
        borderRadius: 5,
        fontSize: 16,
    },
    textInput2: {
        width: wp('90%'),
        height: hp('6%'),
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: 'row',
        fontSize: 16,
    },
    backBtn: {
        width: wp('10%'),
        height: hp('5%'),
        backgroundColor: '#02878c',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
});