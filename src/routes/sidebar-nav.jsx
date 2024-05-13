import {
  CloudHail,
  CookingPot,
  Database,
  Gamepad2,
  Github,
  Home,
  Layers,
  Palette,
  Paperclip,
  QrCode,
  ScrollIcon,
  ShoppingBag,
  Wallet2,
} from 'lucide-react';

export const SIDEBAR_NAV = [
  { path: '/', label: 'Home', icon: <Home />, subMenu: false },
  { path: '/shopping', label: 'Shopping', icon: <ShoppingBag />, subMenu: false },
  {
    path: '/foot-recipes',
    label: 'Foot Recipe App',
    icon: <CookingPot />,
    subMenu: true,
    subMenuItems: [{ path: '/foot-recipes/favourites', label: 'Favourites', icon: <CookingPot /> }],
  },
  { path: '/blog', label: 'Blog', icon: <Paperclip /> },
  { path: '/my-wallet', label: 'My Wallet', icon: <Wallet2 /> },
  { path: '/weather', label: 'Weather App', icon: <CloudHail />, subMenu: false },
  { path: '/find-github', label: 'Find Github', icon: <Github />, subMenu: false },
  { path: '/qr-code', label: 'QR-Code', icon: <QrCode />, subMenu: false },
  { path: '/random-color', label: 'Random Color', icon: <Palette />, subMenu: false },
  { path: '/more-data', label: 'More Data', icon: <Database />, subMenu: false },
  { path: '/tictactoe', label: 'Tic Tac Toe', icon: <Gamepad2 />, subMenu: false },
  { path: '/accordion', label: 'Accordion', icon: <Layers />, subMenu: false },
  { path: '/scroll-indicator', label: 'Scroll Indicator', icon: <ScrollIcon />, subMenu: false },
];
