import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainLayout } from '@/app/layout/MainLayout';

export function Router() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/todos" element={<TodosPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
