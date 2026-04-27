import { View, Text, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.firstCon}>
        <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', top: 20 }}>Hello {name}</Text>
        <View style={{ width: 200, height: 200, borderRadius: 100, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center', marginTop: 50, borderWidth: 5, borderColor: '#2596be' }}>
            <Ionicons name="person" size={100} color="#2596be"/>
        </View>
      </View>
      <View style={styles.secondCon}>
        <TouchableOpacity style={styles.optBtn}>
          <Ionicons name='clipboard' size={30} />
          <Text style={styles.optBtnText}>Personal Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optBtn}>
          <Ionicons name='cart' size={30} />
          <Text style={styles.optBtnText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optBtn}>
          <Ionicons name='document' size={30} />
          <Text style={styles.optBtnText}>Terms & Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optBtn}>
          <Ionicons name='help-circle' size={30} />
          <Text style={styles.optBtnText}>Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optBtn}>
          <Ionicons name='log-out' size={30} color='red' />
          <Text style={[styles.optBtnText, { color: 'red' }]}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    firstCon: {
        height: '20%',
        backgroundColor: '#2596be',
        borderEndEndRadius: 300,
        borderStartEndRadius: 300,
        alignItems: 'center',
        padding: 10
    },
    secondCon: {
        margin: 5,
        padding: 10,
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    optBtn: {
      width: '90%',
      height: '10%',
      borderBottomWidth: 2,
      margin: 10,
      flexDirection: 'row',
      padding: 10,
      gap: 20
    },
    optBtnText: {
      fontSize: 20,
      fontWeight: '600',
      //top: 5
    }
});
