import 'react-native-gesture-handler';
import React, { useContext } from 'react';

import LangWrapper, { LangModeProvider } from './src/lang/LangProvider';
import AppRouter from './src/navigation';
import { AuthContext } from './src/navigation/AuthProvider';

export default function App() {
  return (
    <LangModeProvider>
      <LangWrapper>
        <AppRouter />
      </LangWrapper>
    </LangModeProvider>
  );
}
