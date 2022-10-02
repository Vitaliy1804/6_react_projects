import React from 'react';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';

import './index.scss';

function App () {
 return (
  <main>
    {/* <Favorites /> */}
    <Search />
    <Meals />
    
    {/* <Modal /> */}
  </main>
 )
}
export default App;
