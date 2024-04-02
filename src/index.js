import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './index.css';

// main view that loads other views
import Layout from './views/Layout';
import Home from './views/Home';
import Alpha from './views/Alpha';
import Beta from './views/Beta';
import Gamma from './views/Gamma';
import Fav from './views/Fav';

import NotFound from './views/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="fav" element={<Fav/>} />
        <Route path="alpha" element={<Alpha/>} />
        <Route path="beta" element={<Beta/>} />
        <Route path="gamma" element={<Gamma/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);



