import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import ErrorBoundary from './components/ErrorBoundary';
import { GlobalStyles } from './constants/styles/GlobalStyles';
import { theme } from './constants/styles/theme/theme';
import MainPage from './pages/MainPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ErrorBoundary>
        <MainPage />
      </ErrorBoundary>
    </ThemeProvider>
  </StrictMode>
);
