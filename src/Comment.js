import React from 'react';
import './Comment.css';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) => <li><p>{text}</p> <span><p>votes: {votes}</p> <button onClick={() => thumbUpComment(id)}>Thumb up!</button><button onClick={() => thumbDownComment(id)}>Thumb Down!</button><button className='delete' onClick={() => removeComment(id)}>DELETE</button></span></li>;

export default Comment;
