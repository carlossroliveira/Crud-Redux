// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Create } from '../pages/Create';
import { Layout } from '../components/Layout';
import { Read } from '../pages/Read';
import { Update } from '../pages/Update';
import { Delete } from '../pages/Delete';

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Update" element={<Update />} />
          <Route path="/Delete" element={<Delete />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
