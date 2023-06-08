import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import Accueil from './pages/Accueil';
import Favoris from './pages/Favoris';
import Parametres from './pages/Parametres';
import Login from './components/Login';
import { NavigationContainer } from '@react-navigation/native';
import {View} from "react-native";
import Register from "./components/Register";
import SendFavouriteFilms from "./componentsview/SendFavouriteFilms";

const Tab = createBottomTabNavigator();

const Router = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <NavigationContainer>
            {isAuthenticated ? (
                <Tab.Navigator>
                    <Tab.Screen
                        name="Accueil"
                        component={Accueil}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ focused }) => <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }} />,
                        }}
                    />
                    <Tab.Screen
                        name="Favoris"
                        component={Favoris}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ focused }) => <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }} />,
                        }}
                    />
                    <Tab.Screen
                        name="Parametres"
                        component={Parametres}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ focused }) => <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }} />,
                        }}
                    />
                    <Tab.Screen
                        name="Register"
                        component={Register}
                        options={({ route }) => ({
                            headerShown : false,
                            tabBarButton: [
                                "Register",
                            ].includes(route.name)
                                ? () => {
                                    return null;
                                }
                                : undefined,
                        })}
                        listeners={({ navigation, route }) => ({
                            tabPress: () => {
                                // Increment the key to force the Home component to remount
                            },
                        })}
                    />
                    <Tab.Screen
                        name="Login"
                        component={Login}
                        options={({ route }) => ({
                            headerShown : false,
                            tabBarButton: [
                                "Login",
                            ].includes(route.name)
                                ? () => {
                                    return null;
                                }
                                : undefined,
                        })}
                        listeners={({ navigation, route }) => ({
                            tabPress: () => {
                                // Increment the key to force the Home component to remount
                            },
                        })}
                    />
                    <Tab.Screen
                        name="SendFavourite"
                        component={SendFavouriteFilms}
                        options={({ route }) => ({
                            headerShown : false,
                            tabBarButton: [
                                "SendFavourite",
                            ].includes(route.name)
                                ? () => {
                                    return null;
                                }
                                : undefined,
                        })}
                        listeners={({ navigation, route }) => ({
                            tabPress: () => {
                                // Increment the key to force the Home component to remount
                            },
                        })}
                    />
                </Tab.Navigator>
            ) : (
                <Login />
            )}
        </NavigationContainer>
    );
};

export default Router;
