import React from 'react';

import Header from './components/Header';
import NotFoundBlock from './components/NotFoundBlock';

import Home from './pages/Home';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="App">
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <div className="content">
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFoundBlock />} />
              {/* Должна быть самым последним роутом!! Если других не было найдено, то выполнится этот. */}
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>
    </div>
  );
}
export default App;
