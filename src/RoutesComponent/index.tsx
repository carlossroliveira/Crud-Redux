// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Create } from '../Pages/Create';
import { Layout } from '../components/Layout';
import { Read } from '../Pages/Read';
import { Update } from '../Pages/Update';
import { Delete } from '../Pages/Delete';

export const RoutesComponent = () => {
  // Search filter
  const [filter, setFilter] = useState('');

  return (
    <BrowserRouter>
      <Layout filter={filter} setFilter={setFilter}>
        <Routes>
          <Route path="/" element={<Read filter={filter} />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Update" element={<Update />} />
          <Route path="/Delete" element={<Delete />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
