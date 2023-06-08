// store.js

import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
});

const Store = createStore(rootReducer);

// Fonction pour vérifier l'état de connexion
export const requireAuth = (nextState, replace) => {
    const { auth } = store.getState();
    if (!auth.isAuthenticated) {
        // Redirige l'utilisateur vers l'écran de connexion
        replace({ pathname: '/login' });
    }
};

export default Store;
