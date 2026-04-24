import UserTabs from "./userTabs";
import Authentication from "../screens/auth/authentication";
import ForgotPassword from "../screens/auth/forgotPassword";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator();

const AppStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Authentication" component={Authentication} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
            <Stack.Screen name="userTabs" component={UserTabs} />
        </Stack.Navigator>
    );
}

export const RootNavigator = () => {
    return(
        <NavigationContainer>
            <AppStack/>
        </NavigationContainer>
    );
}
