import React from 'react';
import ReactDOM from 'react-dom';

const Comment = ({text, votes}) => <li>{text} <span>votes: {votes}</span></li>;

export default Comment;
