const ADD_POST = 'ADD-Post';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
    
        postData:[{ id: 1, messeg: 'Мне нравится ваш пост', name: 'Sergey Y.', src: 'https://images.pexels.com/photos/7155295/pexels-photo-7155295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'foto' },
        { id: 2, messeg: 'Мне нравится ваш пост', name: 'Sergey Y.', src: 'https://images.pexels.com/photos/7155295/pexels-photo-7155295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'foto' },],
      
        newPostText: '',
    
}
    

 const containerReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 4,
                messeg: state.newPostText ,
                name: 'Sergey Y.',
                src: "https://images.pexels.com/photos/7155295/pexels-photo-7155295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                alt: 'foto'
            }
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
         case  UPDATE_NEW_POST_TEXT: 
         state.newPostText = action.newText;
         return state;
         default:
             return state
    }
 }
   

export default containerReducer;
export const addPostActionCreator = () => ({ type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text,}) 