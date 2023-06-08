import React, { useState } from "react";
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import axios from 'axios';

const Register = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState("");
    const [group, setGroup] = useState("");
    const [active, setActive] = useState("");

    const registerUser = () => {
        const userData = {
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname,
            birthday: birthday,
            gender: gender,
            group: group,
            active: active,
        };

        axios.post('http://localhost:3000/register', userData)
            .then(response => {
                console.log('User registered successfully!');
                // Mettre en place une redirection
            })
            .catch(error => {
                console.error('An error occurred during registration:', error);
                // Mettre en place un message d'erreur
            });
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
            <TextInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={{ marginBottom: 16 }}
            />
            <TextInput
                label="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
                style={{ marginBottom: 16 }}
            />
            <TextInput
                label="First Name"
                value={firstname}
                onChangeText={text => setFirstname(text)}
                style={{ marginBottom: 16 }}
            />
            <TextInput
                label="Last Name"
                value={lastname}
                onChangeText={text => setLastname(text)}
                style={{ marginBottom: 16 }}
            />
            <TextInput
                label="Birthday"
                value={birthday}
                onChangeText={text => setBirthday(text)}
                style={{ marginBottom: 16 }}
            />
            <TextInput
                label="Gender"
                value={gender}
                onChangeText={text => setGender(text)}
                style={{ marginBottom: 16 }}
            />
            <TextInput
                label="Group"
                value={group}
                onChangeText={text => setGroup(text)}
                style={{ marginBottom: 16 }}
            />
            <TextInput
                label="Active"
                value={active}
                onChangeText={text => setActive(text)}
                style={{ marginBottom: 16 }}
            />
            <Button mode="contained" onPress={registerUser}>
                Register
            </Button>
        </View>
    )
}

export default Register;
