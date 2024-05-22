import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import Accordion from '@/pages/Accordion';
import DynamicTabs from '@/pages/DynamicTabs';
import FindGithub from '@/pages/FindGithub';
import Home from '@/pages/Home';
import MoreData from '@/pages/MoreData';
import MyWallet from '@/pages/MyWallet';
import QRCodeGenerate from '@/pages/QRCodeGenerate';
import RandomColor from '@/pages/RandomColor';
import ScrollIndicator from '@/pages/ScrollIndicator';
import TicTacToe from '@/pages/TicTacToe';
import Weather from '@/pages/Weather';
import BlogDetail from '@/pages/blog/BlogDetail';
import BlogHome from '@/pages/blog/BlogHome';
import BlogLayout from '@/pages/blog/BlogLayout';
import NewBlog from '@/pages/blog/NewBlog';
import UpdateBlog from '@/pages/blog/UpdateBlog';
import FootDetails from '@/pages/foot-recipe/FootDetails';
import FootFavourites from '@/pages/foot-recipe/FootFavourites';
import FootLayout from '@/pages/foot-recipe/FootLayout';
import FootRecipes from '@/pages/foot-recipe/FootRecipes';
import Cart from '@/pages/shopping/Cart';
import ShoppingHome from '@/pages/shopping/ShoppingHome';
import ShoppingLayout from '@/pages/shopping/ShoppingLayout';
import NotFound from '@/pages/NotFound';
import HookFormHome from '@/pages/hook-form/HookFormHome';

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
        <Route path='foot-recipes' element={<FootLayout />}>
          <Route index element={<FootRecipes />} />
          <Route path='favourites' element={<FootFavourites />} />
          <Route path='details/:id' element={<FootDetails />} />
        </Route>
        <Route path='shopping' element={<ShoppingLayout />}>
          <Route index element={<ShoppingHome />} />
          <Route path='cart' element={<Cart />} />
        </Route>
        <Route path='my-wallet' element={<MyWallet />} />
        <Route path='blog' element={<BlogLayout />}>
          <Route index element={<BlogHome />} />
          <Route path='new' element={<NewBlog />} />
          <Route path='update/:id' element={<UpdateBlog />} />
          <Route path='details/:id' element={<BlogDetail />} />
        </Route>
        <Route path='hook-form' element={<HookFormHome />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </>,
  ),
);

export default router;
