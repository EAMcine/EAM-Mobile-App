import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet} from "react-native";

import Accueil from "./pages/Accueil";
import Favoris from "./pages/Favoris";
import Parametres from "./pages/Parametres";
import {NavigationContainer} from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const CustomTapBarButton = () => {
    return (
        <View>
            <Text>
                Accueil
            </Text>

            <Text>
                Favoris
            </Text>

            <Text>
                Paramètres
            </Text>
        </View>
    )
}

const Router = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Accueil" component={Accueil}
                            options={{
                                headerShown: false,
                                tabBarIcon: ({focused}) => (
                                    <View style={{alignItems: 'center', justifyContent: 'center', top: 0}}>

                                    </View>
                                )
                            }}
                />
                <Tab.Screen name="Favoris" component={Favoris}
                            options={{
                                headerShown: false,
                                tabBarIcon: ({focused}) => (
                                    <View style={{alignItems: 'center', justifyContent: 'center', top: 0}}>

                                    </View>
                                )
                            }}
                />
                <Tab.Screen name="Parametres" component={Parametres}
                            options={{
                                headerShown: false,
                                tabBarIcon: ({focused}) => (
                                    <View style={{alignItems: 'center', justifyContent: 'center', top: 0}}>

                                    </View>
                                )
                            }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )

}

export default Router;
