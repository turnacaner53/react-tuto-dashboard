import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import Accordion from '@/pages/Accordion';
import DynamicTabs from '@/pages/DynamicTabs';
import FindGithub from '@/pages/FindGithub';
import Home from '@/pages/Home';
import MoreData from '@/pages/MoreData';
import QRCodeGenerate from '@/pages/QRCodeGenerate';
import RandomColor from '@/pages/RandomColor';
import ScrollIndicator from '@/pages/ScrollIndicator';
import Test from '@/pages/Test';
import TicTacToe from '@/pages/TicTacToe';
import Weather from '@/pages/Weather';

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
        <Route path='find-github' element={<FindGithub />} />
        <Route path='tictactoe' element={<TicTacToe />} />
        <Route path='weather' element={<Weather />} />
        <Route path='test' element={<Test />} />
      </Route>
    </>,
  ),
);

export default router;
