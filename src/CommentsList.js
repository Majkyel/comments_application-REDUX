import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './CommentContainer.js';
import './CommentsList.css';


const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;

export default CommentsList;
