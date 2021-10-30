
import MyPost from './MyPost'
import {addPostActionCreator, updateNewPostActionCreator} from '../../reduc/container-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
    return {
        postData: state.container.postData,
        newPostText: state.container.newText
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        updateNewPostText: (text) =>{
            let action = dispatch(updateNewPostActionCreator(text));
              dispatch(action);
            },
    
        addPost: () => { 
            dispatch( addPostActionCreator());
        }
          
    }
}


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);
export default MyPostContainer;