import { useState } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    FlatList, 
    ScrollView, 
    TouchableOpacity,
    Image 
} from "react-native";
import { 
    Ionicons, 
    Feather,
    FontAwesome6 ,
    FontAwesome,
    MaterialIcons,
    MaterialCommunityIcons 
} from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function Home(){
    const [see, setSee] = useState(false);

    const DATA = [
        { id: "1", title: "Item 1" },
        { id: "2", title: "Item 2" },
        { id: "3", title: "Item 3" },
        { id: "4", title: "Item 4" },
    ];

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
            <View style={{ alignItems: 'flex-start', width: wp('45%'), padding: 5 }}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardPrice}>₦{item.price}</Text>
            </View>
        </TouchableOpacity>
    );

    return(
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={
                    <>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>E-Swap</Text>
                        </View>
                        <View style={styles.searchView}>
                            <View style={styles.searchInput}>
                                <Ionicons name="search-outline" size={24} style={{top: 5}} />
                                <TextInput
                                    placeholder="Type in the name of the Product"
                                    onFocus={() => alert("it is focused")}
                                />
                            </View>
                        </View>
                        <View style={styles.cateView}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.cateText}>Category</Text>
                                <TouchableOpacity style={{left: 450}} onPress={() => setSee(prev => !prev)}>
                                    {see 
                                    ? <Text style={{fontSize: 16, color: 'blue'}}>Not All</Text>
                                    : <Text style={{fontSize: 16, color: 'blue'}}>See All</Text>}
                                </TouchableOpacity>
                            </View>
                            <View>
                                <View style={{flexDirection: 'row', padding: 5, gap: 35, right: 15}}>
                                    <TouchableOpacity style={styles.cateCard}>
                                        <Image
                                            source={require('../../../assets/electronics.jpg')}
                                            style={styles.img}
                                        />
                                        <Text style={styles.imgText}>Electronics</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cateCard}>
                                        <Image
                                            source={require('../../../assets/cloths.jpg')}
                                            style={styles.img}
                                        />
                                        <Text style={styles.imgText}>Fashion</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cateCard}>
                                        <Image
                                            source={require('../../../assets/laptop.jpg')}
                                            style={styles.img}
                                        />
                                        <Text style={styles.imgText}>Laptops</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cateCard}>
                                        <Image
                                            source={require('../../../assets/shoes.jpg')}
                                            style={styles.img}
                                        />
                                        <Text style={styles.imgText}>Shoes</Text>
                                    </TouchableOpacity>
                                </View>
                                {see && (
                                    <View style={{flexDirection: 'row', padding: 5, gap: 35, right: 15, marginTop: 5}}>
                                        <TouchableOpacity style={styles.cateCard}>
                                            <Image
                                                source={require('../../../assets/kitchen.jpg')}
                                                style={styles.img}
                                            />
                                            <Text style={styles.imgText}>Home &{'\n'} Kitchen</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.cateCard}>
                                            <Image
                                                source={require('../../../assets/food.jpg')}
                                                style={styles.img}
                                            />
                                            <Text style={styles.imgText}>Groceries</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.cateCard}>
                                            <Image
                                                source={require('../../../assets/phone.jpg')}
                                                style={styles.img}
                                            />
                                            <Text style={styles.imgText}>Phones</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.cateCard}>
                                            <Image
                                                source={require('../../../assets/beauty.jpg')}
                                                style={styles.img}
                                            />
                                            <Text style={styles.imgText}>Beauty</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </View>
                        </View>
                    </>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        marginTop: 5,
        height: 60,
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 10
    },
    headerText: {
        fontSize: 30,
        color: '#2596be',
        fontFamily: 'Sekuya_Regular'
    },
    headerIcon: {
        fontSize: 30,
        left: 420
    },
    searchView: {
        margin: 5,
        backgroundColor: 'white',
        padding: 10
    },
    searchInput: {
        width: 570,
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        gap: 10,
        padding: 5
    },
    cateView: {
        padding: 10,
        margin: 5
    },
    cateText: {
        fontSize: 16,
        fontFamily: 'Arimo_Bold'
    }, 
    cateCard: {
        width: 120,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    imgText: {
        fontFamily: 'Outfit_regular',
        fontSize: 16
    },
    card: {
        width: wp('45%'),
        height: hp('30%'),
        backgroundColor: '#ffffff',
        borderRadius: 10,
        margin: 5,
        alignItems: 'center',
        marginLeft: wp('3%'),
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    cardImg: {
        width: wp('45%'),
        height: hp('20%'),
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    cardTitle: {
        fontSize: 25,
        fontFamily: 'Outfit_Bold'
    },
    cardPrice: {
        fontSize: 16,
        color: 'green',
        fontFamily: 'Outfit_Bold'
    }
});