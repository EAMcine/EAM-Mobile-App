import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, FlatList} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Favoris = () => {
    const [likedFilms, setLikedFilms] = useState([]);

    useEffect(() => {
        const fetchLikedFilms = async () => {
            const likedFilmsData = await AsyncStorage.getItem('likedFilms');
            const likedFilmsObj = JSON.parse(likedFilmsData);
            const likedFilms = Object.keys(likedFilmsObj).filter((filmTitle) => likedFilmsObj[filmTitle]);
            setLikedFilms(likedFilms);
        };

        fetchLikedFilms();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.title}>
                    Favoris
                </Text>
            </View>
            <FlatList
                data={likedFilms}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Text style={styles.filmTitle}>{item}</Text>
                )}
            />
            <View style={styles.bottomContainer}>
                <Text style={styles.subtitle}>
                    Envie d'ajouter vos propres films ?
                </Text>
                <Button
                    title="Clique ici !"
                    onPress={() => console.log('Clique ici!')}
                    color="#841584"
                    style={styles.button}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    topContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        paddingTop: 20,
    },
    bottomContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        paddingBottom: 20,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    filmTitle: {
        fontSize: 16,
        color: '#333',
        margin: 10,
    },
    subtitle: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        fontSize: 16,
        color: 'white',
        backgroundColor: '#841584',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    }
});

export default Favoris;
