import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CustomButton } from '../../components/component';
import { useNavigation } from '@react-navigation/native';

export default function Authentication(){
    const [isLogin, setIsLogin] = useState(true);
    const navigation = useNavigation();

    const toggleAuth = () => {
        setIsLogin(!isLogin);
    }

    const loggin = () => {
        //for logging in
        navigation.navigate("UserTabs");
    }

    const signingUp = () => {
        //for signingUp in
        alert("Signing Up");
    }

    return(
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, marginTop: 10, justifyContent: 'center', gap: 10 }}>
                <TouchableOpacity onPress={toggleAuth} style={[styles.btn, { borderColor: isLogin ? 'black' : 'white'}]}>
                    <Text style={styles.h1}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleAuth} style={[styles.btn2, { borderColor: isLogin ? 'white' : 'black'} ]}>
                    <Text style={styles.h1}>Signup</Text>
                </TouchableOpacity>
            </View>
            {isLogin 
            ? (
                <View>
                    <View style={{margin: 10, marginTop: 70}}>
                        <Text style={{ fontSize: 30 }}>Login</Text>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={{ fontSize: 20 }}>Email</Text>
                        <TextInput
                            placeholder='email@example.com'
                            style={styles.textInput}
                        />
                        <Text style={{ fontSize: 20 }}>Password</Text>
                        <View style={styles.textInput2}>
                            <TextInput
                                placeholder='password'
                                secureTextEntry={true}
                            />
                            <Ionicons name='eye' size={24} style={{ position: 'absolute', left: 500, top: 20 }} />
                        </View>
                        <TouchableOpacity style={{ left: 350 }} onPress={() => navigation.navigate("ForgotPassword")}>
                            <Text style={{color: 'blue', fontSize: 16}}>Forgot Password</Text>
                        </TouchableOpacity>
                        <CustomButton title='Login' onPress={loggin} />
                    </View>
                </View>
            )
            : (
                <View>
                    <View style={{margin: 10, marginTop: 70}}>
                        <Text style={{ fontSize: 30 }}>Sign Up</Text>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={{ fontSize: 20 }}>Full Name</Text>
                        <TextInput
                            placeholder='Full Name '
                            style={styles.textInput}
                        />
                        <Text style={{ fontSize: 20 }}>Email</Text>
                        <TextInput
                            placeholder='email@example.com'
                            style={styles.textInput}
                        />
                        <Text style={{ fontSize: 20 }}>School</Text>
                        <TextInput
                            placeholder='School Name'
                            style={styles.textInput}
                        />
                        <Text style={{ fontSize: 20 }}>Password</Text>
                        <View style={styles.textInput2}>
                            <TextInput
                                placeholder='password'
                                secureTextEntry={true}
                            />
                            <Ionicons name='eye' size={24} style={{ position: 'absolute', left: 500, top: 20 }} />
                        </View>
                        <CustomButton title='Sign Up' onPress={signingUp} />
                    </View>
                </View>
            )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    h1: {
        fontSize: 20,
    },
    btn: {
        width: wp('12%'),
        height: hp('6%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2
    },
    btn2: {
        width: wp('12%'),
        height: hp('6%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2
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
    }
});
