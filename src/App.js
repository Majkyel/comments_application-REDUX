import React from 'react';
import CommentsListContainer from './CommentsListContainer.js';
import DevTools from './DevTools'; //DevTools import

const App = () => {
   return (
        <div>
            <h1>Comments list!</h1>
            <CommentsListContainer/>
            <DevTools /> //DevTools
        </div>
   ); 
};

export default App;
