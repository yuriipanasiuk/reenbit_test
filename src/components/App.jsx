import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';

const Сharacters = lazy(() => import('../pages/Сharacters'));
const СharacterDetails = lazy(() => import('../pages/СharacterDetails'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate to="characters" />} />
          <Route path="characters" element={<Сharacters />} />
          <Route
            path="characters/:characterId"
            element={<СharacterDetails />}
          />
        </Route>
      </Routes>
    </div>
  );
};

//TODO: add search method
