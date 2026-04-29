import { 
    View, 
    Text, 
    StyleSheet,
    FlatList,
    TouchableOpacity, 
    Image
} from "react-native";
import { 
    Ionicons,
    AntDesign
} from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function Cart(){
    const products = [
        {
            id: '1',
            name: 'Tuxedo',
            img: require('../../../assets/electronics.jpg'),
            category: 'Fashion',
            price: 2000,
            description: 'A really nice suit for formal occasions'
        },
        {
            id: '2',
            name: 'Smartphone',
            img: require('../../../assets/phone.jpg'),
            category: 'Phones',
            price: 1500,
            description: 'Latest smartphone with high performance and great camera'
        },
        {
            id: '3',
            name: 'Sneakers',
            img: require('../../../assets/shoes.jpg'),
            category: 'Shoes',
            price: 300,
            description: 'Comfortable and stylish everyday sneakers'
        },
        {
            id: '4',
            name: 'Laptop',
            img: require('../../../assets/laptop.jpg'),
            category: 'Laptop',
            price: 2500,
            description: 'Powerful laptop suitable for work and gaming'
        },
        {
            id: '5',
            name: 'Wrist Watch',
            img: require('../../../assets/cloths.jpg'),
            category: 'Fashion',
            price: 450,
            description: 'Elegant wrist watch with a modern design'
        },
        {
            id: '6',
            name: 'Backpack',
            img: require('../../../assets/food.jpg'),
            category: 'Bags',
            price: 200,
            description: 'Durable backpack perfect for travel and school'
        },
        {
            id: '7',
            name: 'Headphones',
            img: require('../../../assets/kitchen.jpg'),
            category: 'Electronics',
            price: 350,
            description: 'Noise-cancelling headphones with great sound quality'
        },
        {
            id: '8',
            name: 'Office Chair',
            img: require('../../../assets/beauty.jpg'),
            category: 'Furniture',
            price: 800,
            description: 'Ergonomic office chair for maximum comfort'
        }
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card}>
            <Image
                source={item.img}
                style={styles.cardImg}
            />
            <View style={styles.cardTextView}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardPrice}>₦{item.price.toFixed(2)}</Text>
                <View style={{ flexDirection: 'row', marginTop: hp('1%'), gap: wp('27%') }}>
                    <View style={styles.cardQuantityView}>
                        <AntDesign name="minus" size={24}/>
                        <Text style={{ fontSize: 20 }}>1</Text>
                        <Ionicons name="add" size={24}/>
                    </View>
                    <Ionicons name="trash-bin" size={24} color={'red'}/>
                </View>
            </View>
        </TouchableOpacity>
    );

    return(
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    card: {
        width: wp('95%'),
        height: hp('15%'),
        backgroundColor: '#ffffff',
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        gap: wp('3%'),
    },
    cardImg: {
        width: wp('35%'),
        height: hp('15%'),
        resizeMode: 'cover',
        borderRadius: 10
    },
    cardTextView: {
        padding: 10,
        gap: hp('1%')
    },
    cardTitle: {
        fontSize: 24
    },
    cardPrice: {
        fontSize: 20,
        color: 'green'
    },
    cardQuantityView: {
        flexDirection: 'row',
        borderWidth: 2,
        width: wp('20%'),
        gap: wp('4.5%'),
        borderRadius: 5
    }, 
});