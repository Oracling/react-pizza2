import React from 'react';

import Header from './components/Header';
import NotFoundBlock from './components/NotFoundBlock';

import Home from './pages/Home';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="App">
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">
          <Routes>
            <Route path="" element={<Home searchValue={searchValue} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFoundBlock />} />
            {/* Должна быть самым последним роутом!! Если других не было найдено, то выполнится этот. */}
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
