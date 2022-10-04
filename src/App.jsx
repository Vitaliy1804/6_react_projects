import React from 'react';

import { useGlobalContext } from './context';
// import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';

import './index.scss';

export default function App () {
  const {showModal} = useGlobalContext()
 return (
  <main>
    {/* <Favorites /> */}
    <Search />
    <Meals />
    
    {showModal && <Modal /> }
  </main>
 )
}
 
