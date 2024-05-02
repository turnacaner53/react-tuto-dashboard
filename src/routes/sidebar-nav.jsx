import { Database, Home, Layers, Palette, QrCode, ScrollIcon, TestTube } from 'lucide-react';

export const SIDEBAR_NAV = [
  { path: '/', label: 'Home', icon: <Home /> },
  { path: '/accordion', label: 'Accordion', icon: <Layers /> },
  { path: '/random-color', label: 'Random Color', icon: <Palette /> },
  { path: '/more-data', label: 'More Data', icon: <Database /> },
  { path: '/qr-code', label: 'QR-Code', icon: <QrCode /> },
  { path: '/scroll-indicator', label: 'Scroll Indicator', icon: <ScrollIcon /> },
  { path: '/test', label: 'Test', icon: <TestTube /> },
];
