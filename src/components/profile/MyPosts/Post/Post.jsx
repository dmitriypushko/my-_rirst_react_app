import React from 'react';
import s from './Post.module.css';


const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg' alt="some alt text"></img>

      {props.message} {' '}
      Like {props.likes}

    </div>
  )
};

export default Post;