import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Home from './Pages/Home';
import SharedLayout from './Component/SharedLayout';
import ErrorPage from './Pages/ErrorPage';
import SingleCountry from './Pages/SingleCountry';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="country/:countryId"
            element={<SingleCountry />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
