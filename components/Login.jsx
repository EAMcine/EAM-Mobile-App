import React, { useState } from 'react';
import {View, Alert, TouchableOpacity, StyleSheet} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import {Text} from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const Login = ({}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const sendLogin = () => {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                dispatch({ type: 'LOGIN_SUCCESS' });
                Alert.alert('Success', 'You are logged in!');
                navigation.navigate('HomeScreen');
            })
            .catch((error) => {
                // Alert.alert('Error', 'An error occurred during login');
                console.error('Error:', error);
            });
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
            <View style={{display : "flex", justifyContent : "center", alignItems : "center", marginBottom : 20}}>
                <Text style={styles.text}>
                    Bienvenue sur EAM - Vidéothèque
                </Text>
            </View>
            <TextInput
                label="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={{ marginBottom: 16 }}
            />
            <TextInput
                label="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                style={{ marginBottom: 16 }}
            />
            <Button mode="contained" onPress={sendLogin}>
                Se connecter
            </Button>
            <TouchableOpacity style={{display : "flex", justifyContent : "center", alignItems : "center", marginTop : '5%'}}>
                <Text onPress={() => {
                    navigation.navigate('Register');
                }}>
                    Vous n'avez pas de compte ? S'inscrire
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text : {
        fontSize : 20
    }
})

export default Login;
