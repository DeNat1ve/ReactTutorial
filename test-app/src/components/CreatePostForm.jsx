import React, { useState } from 'react';
import CustomInputs from './UI/inputs/CustomInputs';
import CustomButtons from './UI/buttons/CustomButtons';

const PostForm = ({ create }) => {

    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })
    }

    return (
        <form>
            <CustomInputs type='text' value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} />
            <CustomInputs type='text' value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} />
            <CustomButtons onClick={addNewPost}>Add Post</CustomButtons>
        </form>
    );
};

export default PostForm;