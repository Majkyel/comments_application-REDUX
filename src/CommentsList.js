import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.js';


const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...comments}/>)}</ul>;

export default CommentsList;
