import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export function CustomButton({ title, onPress }){
    return(
        <View>
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <Text style={styles.btnText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        marginTop: hp('2%'),
        width: wp('90%'),
        height: hp('6%'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#02878c',
        borderRadius: 10
    },
    btnText: {
        color: 'white',
        fontSize: 20,
    }
});