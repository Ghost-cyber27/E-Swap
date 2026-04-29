import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function Category(){
    const categories = [
        { id: '1', name: 'Electronics', img: require('../../../assets/electronics.jpg')},
        { id: '2', name: 'Fashion', img: require('../../../assets/cloths.jpg') },
        { id: '3', name: 'Home & Kitchen', img: require('../../../assets/kitchen.jpg') },
        { id: '4', name: 'Groceries', img: require('../../../assets/food.jpg') },
        { id: '5', name: 'Phones', img: require('../../../assets/phone.jpg') },
        { id: '7', name: 'Shoes', img: require('../../../assets/shoes.jpg') },
        { id: '8', name: 'Beauty', img: require('../../../assets/beauty.jpg')},
        
    ];

    const categoryCard = ({item}) => {
        return(
            <TouchableOpacity style={styles.card}>
                <Image
                    source={item.img}
                    style={styles.cardImg}
                />
                <Text style={styles.cardText}>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    return(
        <View style={styles.container}>
            <View style={styles.cardView}>
                <FlatList
                    data={categories}
                    keyExtractor={(item) => item.id}
                    renderItem={categoryCard}
                    numColumns={3}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10
    },
    cardView: {
        margin: 5,
        marginTop: hp('5%'),
    },
    card: {
        width: wp('30%'),
        height: hp('20%'),
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        margin: 5,
        alignItems: 'center'
    },
    cardImg: {
        width: wp('30%'),
        height: hp('15%'),
        resizeMode : 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    cardText: {
        fontSize: 16,
        fontWeight: '500',
        top: hp('2%')
    }
});