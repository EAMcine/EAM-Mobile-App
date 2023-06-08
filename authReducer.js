// authReducer.js

const initialState = {
    isAuthenticated: false,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export default AuthReducer;
