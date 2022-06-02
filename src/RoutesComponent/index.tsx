// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Create } from '../Pages/Create';
import { Layout } from '../components/Layout';
import { Dashboard } from '../Pages/Dashboard';

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
