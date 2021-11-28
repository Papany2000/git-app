const ADD_POST = 'ADD-Post';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_CONTAINER = 'SET_USER_CONTAINER'
let initialState = {
    
        postData:[{ id: 1, messeg: 'Мне нравится ваш пост', name: 'Sergey Y.', src: 'https://images.pexels.com/photos/7155295/pexels-photo-7155295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'foto' },
        { id: 2, messeg: 'Мне нравится ваш пост', name: 'Sergey Y.', src: 'https://images.pexels.com/photos/7155295/pexels-photo-7155295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'foto' },],
      
        newPostText: 'it-kamasutra.com',
        profile: null
}
    

 const containerReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            let newText = {
                id: 3,
                messeg: state.newPostText ,
                name: 'Sergey Y.',
                src: "https://images.pexels.com/photos/7155295/pexels-photo-7155295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                alt: 'foto'
            };
            return {...state,
            postData: [...state.postData, newText],
            newPostText: ''
        }
            
        
         case  UPDATE_NEW_POST_TEXT:
            return {
                ...state,
         newPostText: action.newText
        }
        case  SET_USER_CONTAINER:
            return {
                ...state,
         profile: action.profile
            }
        
    
         default:
             return state
    }
 }
   

export default containerReducer;
export const addPost = () => ({ type: ADD_POST})
export const updateNewPost = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text,}) 
export const  setUserContainer = (profile) => ({type: SET_USER_CONTAINER, profile}) 