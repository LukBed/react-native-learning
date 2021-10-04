import React from 'react';

import LangProvider, { LangModeProvider } from './src/lang/LangProvider';
import HomeView from './src/view/home/Home';

export default function App() {
  return (
    <LangModeProvider>
      <LangProvider>
        <HomeView />
      </LangProvider>
    </LangModeProvider>
  );
}
