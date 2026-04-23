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

export default function Home(){
    const [see, setSee] = useState(false);

    const DATA = [
        { id: "1", title: "Item 1" },
        { id: "2", title: "Item 2" },
        { id: "3", title: "Item 3" },
        { id: "4", title: "Item 4" },
    ];

    /**
     * Electronics
Fashion
Groceries
Phones
Laptops
Shoes
Beauty
Home & Kitchen
     */

    return(
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({item}) => <Text>{item.title}</Text>}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    <>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>E-Swap</Text>
                            <Ionicons name="accessibility" size={30} style={styles.headerIcon} />
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
                                            source={require('../../assets/electronics.jpg')}
                                            style={styles.img}
                                        />
                                        <Text style={styles.imgText}>Electronics</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cateCard}>
                                        <Image
                                            source={require('../../assets/cloths.jpg')}
                                            style={styles.img}
                                        />
                                        <Text style={styles.imgText}>Fashion</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cateCard}>
                                        <Image
                                            source={require('../../assets/laptop.jpg')}
                                            style={styles.img}
                                        />
                                        <Text style={styles.imgText}>Laptops</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cateCard}>
                                        <Image
                                            source={require('../../assets/shoes.jpg')}
                                            style={styles.img}
                                        />
                                        <Text style={styles.imgText}>Shoes</Text>
                                    </TouchableOpacity>
                                </View>
                                {see && (
                                    <View style={{flexDirection: 'row', padding: 5, gap: 35, right: 15, marginTop: 5}}>
                                        <TouchableOpacity style={styles.cateCard}>
                                            <Image
                                                source={require('../../assets/kitchen.jpg')}
                                                style={styles.img}
                                            />
                                            <Text style={styles.imgText}>Home &{'\n'} Kitchen</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.cateCard}>
                                            <Image
                                                source={require('../../assets/food.jpg')}
                                                style={styles.img}
                                            />
                                            <Text style={styles.imgText}>Groceries</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.cateCard}>
                                            <Image
                                                source={require('../../assets/phone.jpg')}
                                                style={styles.img}
                                            />
                                            <Text style={styles.imgText}>Phones</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.cateCard}>
                                            <Image
                                                source={require('../../assets/beauty.jpg')}
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
        fontSize: 24,
        color: 'blue',
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
});