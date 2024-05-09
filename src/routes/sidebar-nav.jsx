import {
  CloudHail,
  CookingPot,
  Database,
  Gamepad2,
  Github,
  Home,
  Layers,
  Palette,
  QrCode,
  ScrollIcon,
  TestTube,
} from 'lucide-react';

export const SIDEBAR_NAV = [
  { path: '/', label: 'Home', icon: <Home /> },
  { path: '/accordion', label: 'Accordion', icon: <Layers /> },
  { path: '/random-color', label: 'Random Color', icon: <Palette /> },
  { path: '/more-data', label: 'More Data', icon: <Database /> },
  { path: '/qr-code', label: 'QR-Code', icon: <QrCode /> },
  { path: '/scroll-indicator', label: 'Scroll Indicator', icon: <ScrollIcon /> },
  { path: '/find-github', label: 'Find Github', icon: <Github /> },
  { path: '/tictactoe', label: 'Tic Tac Toe', icon: <Gamepad2 /> },
  { path: '/weather', label: 'Weather App', icon: <CloudHail /> },
  { path: '/foot-recipes', label: 'Foot Recipe App', icon: <CookingPot /> },
  // { path: '/test', label: 'Test', icon: <TestTube /> },
];
