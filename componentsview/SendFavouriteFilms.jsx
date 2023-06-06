import React, { useState } from "react";
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Register = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [favoriteMovie, setFavoriteMovie] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");

    const registerUser = () => {
        // Add your registration logic here
    };

    const submitFavoriteMovie = async () => {
        // Here, replace with your actual code to send the movie to your database.
        // For instance, if you are using a REST API, it may look something like this:

        // const response = await fetch("your_api_endpoint", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         email: email,
        //         favorite_movie: favoriteMovie
        //     })
        // });
        //
        // const data = await response.json();
        //
        // console.log(data);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
            <TextInput
                label="Favorite Movie"
                value={favoriteMovie}
                onChangeText={text => setFavoriteMovie(text)}
                style={{ marginBottom: 16 }}
            />
            <TextInput
                label="Rating"
                value={rating}
                onChangeText={text => setRating(text)}
                keyboardType='numeric'
                style={{ marginBottom: 16 }}
            />
            <TextInput
                label="Description"
                value={description}
                onChangeText={text => setDescription(text)}
                style={{ marginBottom: 16 }}
            />
            <TextInput
                label="Author"
                value={author}
                onChangeText={text => setAuthor(text)}
                style={{ marginBottom: 16 }}
            />
            <Button mode="contained" onPress={submitFavoriteMovie} style={{ marginTop: 16 }}>
                Submit Favorite Movie
            </Button>
        </View>
    )
}

export default Register;
