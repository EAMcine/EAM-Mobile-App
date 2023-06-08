import React, { useState, useEffect } from "react";
import {View, StyleSheet, Dimensions, TouchableOpacity, Modal, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { Text, Card } from "react-native-elements";
import Login from "../components/Login";
import Register from "../components/Register";
import SendFavouriteFilms from "../componentsview/SendFavouriteFilms";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from "react-redux";


const Accueil = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [categories, setCategories] = useState([]);
    const [likes, setLikes] = useState({});
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        fetchFilms();
    }, []);

    const fetchFilms = () => {
        const categoriesData = [
            {
                category: "Action",
                films: [
                    {
                        title: "Avengers: Infinity War",
                        imageUrl: "https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
                    },
                    {
                        title: "Avengers: Endgame",
                        imageUrl: "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
                    },
                    {
                        title: "John Wick 3",
                        imageUrl: "https://image.tmdb.org/t/p/original/MZSzkU7g6k0MA9T1059QHObQUy.jpg",
                    },
                ],
            },
            {
                category: "Comedy",
                films: [
                    {
                        title: "The Hangover",
                        imageUrl: "https://image.tmdb.org/t/p/original/sNeoSFfRfrtj3WellcfxaSfWMGk.jpg",
                    },
                    {
                        title: "Superbad",
                        imageUrl: "https://image.tmdb.org/t/p/original/6SOK2dSgMTqldcSMmh8LvOZsCWT.jpg",
                    },
                    {
                        title: "Step Brothers",
                        imageUrl: "https://image.tmdb.org/t/p/original/6YhdeNPY6DK4B9IKqA1LIU4lIL0.jpg",
                    },
                ],
            },
            {
                category: "Sci-Fi",
                films: [
                    {
                        title: "Inception",
                        imageUrl: "https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
                    },
                    {
                        title: "Interstellar",
                        imageUrl: "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
                    },
                    {
                        title: "The Matrix",
                        imageUrl: "https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
                    },
                ],
            },
        ];
        setCategories(categoriesData);

        const initialLikes = {};
        for (const category of categoriesData) {
            for (const film of category.films) {
                initialLikes[film.title] = false;
            }
        }
        setLikes(initialLikes);
    };

    const handleLike = async (title) => {
        const newLikes = {
            ...likes,
            [title]: !likes[title],
        };
        setLikes(newLikes);

        // Update AsyncStorage
        await AsyncStorage.setItem('likedFilms', JSON.stringify(newLikes));
    };

    const handleSelectFilm = (film) => {
        setSelectedFilm(film);
        setModalVisible(true);
    };

    const navigateToFavoris = () => {
        navigation.navigate('Favoris', { likes });
    };

    if (!isAuthenticated) {
        return (
            <View style={styles.container}>
                <Text>Veuillez vous connecter pour accéder à l'application.</Text>
                <TouchableOpacity>
                    <Text>
                        Vous n'avez pas de compte ? S'inscrire
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <Text h3 style={styles.headerText}>
                        Accueil
                    </Text>
                    {categories.map((category, index) => (
                        <View key={index}>
                            <Text h4 style={styles.categoryText}>
                                {category.category}
                            </Text>
                            <ScrollView horizontal={true}>
                                {category.films.map((film, index) => (
                                    <View key={index} style={styles.item}>
                                        <TouchableOpacity onPress={() => handleSelectFilm(film)}>
                                            <Card>
                                                <Card.Image source={{ uri: film.imageUrl }} style={styles.image} />
                                                <View style={styles.titleContainer}>
                                                    <Text style={styles.title}>{film.title}</Text>
                                                    <TouchableOpacity onPress={() => handleLike(film.title)}>
                                                        <Ionicons
                                                            name={likes[film.title] ? 'heart' : 'heart-outline'}
                                                            size={24}
                                                            color='red'
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                            </Card>
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    ))}
                    <Modal animationType='slide' visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                {selectedFilm && (
                                    <>
                                        <Text style={styles.modalTitle}>{selectedFilm.title}</Text>
                                        <Text style={styles.modalText}>{selectedFilm.description}</Text>
                                    </>
                                )}
                                <Button title='Close' onPress={() => setModalVisible(false)} />
                            </View>
                        </View>
                    </Modal>
                </View>
                {/*<View style={styles.containerFilms}>*/}
                {/*    <TouchableOpacity>*/}
                {/*        <Text>Vous aussi vous souhaitez ajouter vos films favoris ?</Text>*/}
                {/*        <Text>Cliquez ici !</Text>*/}
                {/*    </TouchableOpacity>*/}
                {/*</View>*/}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 16,
    },
    headerText: {
        alignSelf: "center",
        marginBottom: 20,
    },
    categoryText: {
        marginBottom: 10,
        fontWeight: "bold",
    },
    item: {
        width: Dimensions.get("window").width * 0.7, // 70% of the screen width
        marginRight: 10,
    },
    image: {
        width: "100%",
        height: 200,
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    containerFilms : {
        width : "100%",
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        textAlign :"center"
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default Accueil;
