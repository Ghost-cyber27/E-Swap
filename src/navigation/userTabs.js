import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Entypo, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Home from "../screens/home";
import Cart from "../screens/cart";
import Category from "../screens/category";
import Profile from "../screens/profile";

const Tab = createBottomTabNavigator();

export default function UserTabs(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="home" size={24}/>
                    )
                }}
            />
            <Tab.Screen
                name="Category"
                component={Category}
                options={{
                    tabBarIcon: () => (
                        <MaterialIcons name="category" size={24}/>
                    )
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="shopping-cart" size={24}/>
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="face-man-profile" size={24}/>
                    )
                }}
            />
        </Tab.Navigator>
    );
}