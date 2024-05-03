import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import Test from '@/pages/Test';
import Accordion from '@/pages/Accordion';
import RandomColor from '@/pages/RandomColor';
import MoreData from '@/pages/MoreData';
import QRCodeGenerate from '@/pages/QRCodeGenerate';
import ScrollIndicator from '@/pages/ScrollIndicator';
import DynamicTabs from '@/pages/DynamicTabs';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='accordion' element={<Accordion />} />
         <Route path='random-color' element={<RandomColor />} />
         <Route path='more-data' element={<MoreData />} />
         <Route path='qr-code' element={<QRCodeGenerate />} />
         <Route path='scroll-indicator' element={<ScrollIndicator />} />
         <Route path='dynamic-tabs' element={<DynamicTabs />} />
        <Route path='test' element={<Test />} />
      </Route>
    </>,
  ),
);

export default router;
