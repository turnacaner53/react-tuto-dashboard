import { Database, Home, Layers, Palette, TestTube } from 'lucide-react';

export const SIDEBAR_NAV = [
  { path: '/', label: 'Home', icon: <Home /> },
  { path: '/accordion', label: 'Accordion', icon: <Layers /> },
  { path: '/random-color', label: 'Random Color', icon: <Palette /> },
  { path: '/more-data', label: 'More Data', icon: <Database /> },
  { path: '/test', label: 'Test', icon: <TestTube /> },
];
