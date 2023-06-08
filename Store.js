import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
});

const Store = createStore(rootReducer);

export const requireAuth = (nextState, replace) => {
    const { auth } = Store.getState();
    if (!auth.isAuthenticated) {
        // Redirige l'utilisateur vers l'écran de connexion
        replace({ pathname: '/login' });
    }
};

export default Store;
