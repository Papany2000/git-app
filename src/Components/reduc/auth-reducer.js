const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => { 
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
       
        default:
            return state;

    }
}



export default authReducer;
export const setAuthUserData = (userId, emeil, login,) => ({type: SET_AUTH_USER_DATA, data: {userId, emeil, login}})