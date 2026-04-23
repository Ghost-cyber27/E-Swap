import UserTabs from "./userTabs";
import Authentication from "../screens/authentication";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const RootStack = createNativeStackNavigator();

export const RootNavigator = () => {
    return(
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false}}>
            	<RootStack.Screen name="Authentication" component={Authentication} />
                <RootStack.Screen name="userTabs" component={UserTabs} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
