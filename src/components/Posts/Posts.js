import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post.js";

import useStyles from './stylesPosts.js';

const Posts = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    console.log(posts);

    return(
        <>
            <h1 className={classes.something}>Posts</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;