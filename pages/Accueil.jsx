import React, {useState, useEffect} from "react";
import {View, StyleSheet, Dimensions, TouchableOpacity, Modal, Button} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {ScrollView} from "react-native-gesture-handler";
import {Text, Card} from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from "react-redux";
import StarRating from 'react-native-star-rating';
import {Linking} from 'react-native';
import Abonnement from "./Abonnement";


const Accueil = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [categories, setCategories] = useState([]);
    const [likes, setLikes] = useState({});
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [rating, setRating] = useState({});

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
                        trailerUrl: "https://www.youtube.com/watch?v=6ZfuNTqbHE8",
                    },
                    {
                        title: "Avengers: Endgame",
                        imageUrl: "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
                        trailerUrl: "https://www.youtube.com/watch?v=TcMBFSGVi1c​1​"
                    },
                    {
                        title: "John Wick 3",
                        imageUrl: "https://fr.web.img5.acsta.net/pictures/19/05/21/15/23/4992794.jpg",
                        trailerUrl: "https://www.youtube.com/watch?v=M7XM597XO94"
                    },
                    {
                        title: "Die Hard",
                        imageUrl: "https://image.tmdb.org/t/p/original/2lECpi35Hnbpa4y46JX0aY3AWTy.jpg",
                        trailerUrl: "https://www.youtube.com/watch?v=2TQ-pOvI6Xo"
                    },
                    {
                        title: "Mad Max: Fury Road",
                        imageUrl: "https://fr.web.img3.acsta.net/pictures/15/04/14/18/30/215297.jpg",
                        trailerUrl: "https://www.youtube.com/watch?v=hEJnMQG9ev8"
                    },
                    {
                        title: "Mission: Impossible - Fallout",
                        imageUrl: "https://image.tmdb.org/t/p/original/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
                        trailerUrl: "https://www.youtube.com/watch?v=wb49-oV0F78"
                    },
                ],
            },
            {
                category: "Comedie",
                films: [
                    {
                        title: "The Hangover",
                        imageUrl: "https://m.media-amazon.com/images/I/91jlCn9bM1L._RI_.jpg",
                        trailerUrl: "https://www.youtube.com/watch?v=tcdUhdOlz9M"
                    },
                    {
                        title: "Superbad",
                        imageUrl: "https://m.media-amazon.com/images/I/51HShnByGEL._AC_UF894,1000_QL80_.jpg",
                        trailerUrl: "https://www.youtube.com/watch?v=LvKvus3vCEY​"
                    },
                    {
                        title: "Step Brothers",
                        imageUrl: "https://m.media-amazon.com/images/M/MV5BODViZDg3ZjYtMzhiYS00YTVkLTk4MzktYWUxMTlkYjc1NjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
                        trailerUrl: "https://www.youtube.com/watch?v=cKPNums7NUo​"
                    },
                    {
                        title: "Bridesmaids",
                        imageUrl: "https://akns-images.eonline.com/eol_images/Entire_Site/2016411/rs_600x600-160511104024-600.bridesmaids.cm.51116.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top",
                        trailerUrl: "https://www.youtube.com/watch?v=xI0g1gaXr-Y"
                    },
                    {
                        title: "Anchorman: The Legend of Ron Burgundy",
                        imageUrl: "https://m.media-amazon.com/images/M/MV5BMTQ2MzYwMzk5Ml5BMl5BanBnXkFtZTcwOTI4NzUyMw@@._V1_FMjpg_UX1000_.jpg",
                        trailerUrl: "https://www.youtube.com/watch?v=QvJ1K0_JzFI"
                    },
                ],
            },
            {
                category: "Science-Fiction",
                films: [
                    {
                        title: "Inception",
                        imageUrl: "https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
                        trailerUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0"
                    },
                    {
                        title: "Interstellar",
                        imageUrl: "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
                        trailerUrl: "https://www.youtube.com/watch?v=VaOijhK3CRU"
                    },
                    {
                        title: "The Matrix",
                        imageUrl: "https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
                        trailerUrl: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
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

        const initialRatings = {};
        for (const category of categoriesData) {
            for (const film of category.films) {
                initialRatings[film.title] = 0; // Initial rating set to 0 for each film
            }
        }
        setRating(initialRatings);

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
        navigation.navigate('Favoris', {likes});
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
                                                <Card.Image source={{uri: film.imageUrl}} style={styles.image}/>
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
                                        <Text style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexDirection: "column",
                                            textAlign: "center",
                                            marginBottom: 20
                                        }}>
                                            Notez ce film :
                                        </Text>
                                        <StarRating
                                            disabled={false}
                                            maxStars={5}
                                            rating={rating[selectedFilm.title]}
                                            selectedStar={(value) => setRating({
                                                ...rating,
                                                [selectedFilm.title]: value
                                            })}
                                            fullStarColor={'gold'}

                                        />
                                        <View style={{marginTop: 15}}/>
                                        <Button title='Voir le trailer'
                                                onPress={() => Linking.openURL(selectedFilm.trailerUrl)}/>
                                    </>
                                )}
                                <View style={{marginTop: 15}}/>
                                <Button title='Fermer' onPress={() => setModalVisible(false)}/>
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
                <Abonnement />
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
    containerFilms: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
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
