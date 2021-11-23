
import MyPost from './MyPost'
import {addPost, updateNewPost} from '../../reduc/container-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
    return {
        postData: state.container.postData,
        newPostText: state.container.newPostText
    }
}



const MyPostContainer = connect(mapStateToProps, {updateNewPost, addPost})(MyPost);
export default MyPostContainer;