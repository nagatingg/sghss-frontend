import { Typography, Container, Box } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

export default function DashboardAdmin() {
  const { user } = useAuth();
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard do Administrador
        </Typography>
        <Typography>
          Bem-vindo(a), {user?.name}!
        </Typography>
      </Box>
    </Container>
  );
}