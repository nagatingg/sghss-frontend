import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import AppRouter from './routes';
import { AuthProvider } from './contexts/AuthContext'; // Importe o AuthProvider

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider> {/* Envolva o AppRouter com o AuthProvider */}
        <AppRouter />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;