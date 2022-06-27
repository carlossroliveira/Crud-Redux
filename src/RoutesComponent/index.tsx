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
import { List } from '../Pages/LIst'
import { Aside } from '../components/Layout/part/Aside'

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
          <Route path="/Update/list/:id" element={<List />} />
          <Route path="/Delete" element={<Delete />} />
          {/* <Route path="*" element={} /> ROTA INEXISTENTE */}
        </Routes>
      </Layout>
    </BrowserRouter>  
  );
};