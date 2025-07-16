import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useAuth } from '../contexts/AuthContext'; // Importa o hook useAuth
import { useNavigate } from 'react-router-dom'; // Importa o useNavigate para redirecionar

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth(); // Usa contexto de autenticação
  const navigate = useNavigate(); // Hook para navegar entre páginas

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    // Tenta fazer o login com os dados do formulário
    const success = auth.login(email, password);

    if (success) {
      // Se o login for bem-sucedido, redireciona para o dashboard
      //alert('Login realizado com sucesso!');
       navigate('/dashboard');
    } else {
      alert('E-mail ou senha inválidos!');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login SGHSS
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Endereço de E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}