import {connect} from 'react-redux';
import CommentsList from './CommentsList.js';

const mapStateProps = state => ({
    comments: state.comments
});

export default connect(mapStateProps)(CommentsList);
