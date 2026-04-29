import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/tabs/home";
import Category from "../screens/tabs/category";
import AddProducts from "../screens/tabs/add_products";
import Cart from "../screens/tabs/cart";
import Profile from "../screens/tabs/profile";
import { Entypo, MaterialIcons, Feather, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function UserTabs(){
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Home} options={{ 
                tabBarIcon: () => (
                    <Entypo name="home" size={24}/>
                )
            }}/>
            <Tab.Screen name="Category" component={Category} options={{ 
                 tabBarIcon: () => (
                    <MaterialIcons  name="category" size={24}/>
                )
                }} />
            <Tab.Screen name="Add Products" component={AddProducts} options={{ 
                tabBarIcon: () => (
                    <Ionicons name="add-circle" size={24}/>
                )
             }} />
            <Tab.Screen name="Cart" component={Cart} options={{ 
                tabBarIcon: () => (
                    <Feather name="shopping-cart" size={24}/>
                )
             }} />
            <Tab.Screen name="Profile" component={Profile} options={{ 
                tabBarIcon: () => (
                    <Ionicons name="person" size={24}/>
                )
             }} />
        </Tab.Navigator>
    );
}