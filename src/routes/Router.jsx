import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import Test from '@/pages/Test';
import Accordion from '@/pages/Accordion';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='accordion' element={<Accordion />} />
        <Route path='test' element={<Test />} />
      </Route>
    </>,
  ),
);

export default router;
