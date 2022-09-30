import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { postsSelector } from "../redux/reducers/postsReducer/postsSelector";

import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import { GET_POST } from "../redux/reducers/actionTypes";

const Post = () => {

    const { id } = useParams();
    const mPostId = Number(id);

    const postList = useSelector(postsSelector);

    const mIdxEl = postList.findIndex(el => el.id === mPostId);

    const post = postList[mIdxEl];

    console.dir(`post = ${post}`);

    const navigate = useNavigate();

    return (
        <div>
            <h3>Статья {post.id}</h3>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div>
                <Button onClick={() => { navigate(`/posts`) }} sx={{ margin: '20px 0px 10px 0' }} variant="contained">Назад к списку статей</Button>
            </div>
        </div>
    );
}

export default Post;