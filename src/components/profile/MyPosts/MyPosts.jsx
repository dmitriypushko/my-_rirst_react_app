import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import requiredField, {maxLengthCreator} from "../../../Helpers/validators/validator";
import {TextArea} from "../../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const  MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} likes={p.qtyLikes} />);
    let newPostElement = React.createRef();


    let addNewPostFromForm = (values) => {
        props.addPost(values.newPostText)
    };

    return (
        <div className={s.descriptionPosts}>
            <h3>My Posts </h3>
            < AddNewPostReduxForm onSubmit = { addNewPostFromForm } />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

const AddNewPostForm = (props) => {
    return (
        <form onSubmit = { props.handleSubmit } >
            <div>
                    <Field component = {TextArea} name = 'newPostText'
                           placeholder = 'you can type here a new post text'
                     validate={ [requiredField, maxLength10] } />
            </div>
            <div>
                <button > Add post </button>
            </div>
        </form>
    )
};

const AddNewPostReduxForm = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);


export default MyPosts;