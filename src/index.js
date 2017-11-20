import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD1s0GWTa_Nb_mCaQAp30QAXvAbWGTpgTQ';


//create a new component. this will produce some html.

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


// take the component's generated html and put it on the page. (in DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
