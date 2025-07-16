// src/pages/DashboardMedico.tsx

import { useState, useEffect } from 'react';
import { Typography, Box, Grid, Paper, List, ListItem, ListItemText, CircularProgress, Divider } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { getAgendamentosPorMedico } from '../services/api';
import type { Agendamento } from '../services/api';

export default function DashboardMedico() {
  const { user } = useAuth();
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.id) {
      getAgendamentosPorMedico(user.id).then(data => {
        setAgendamentos(data);
        setLoading(false);
      });
    }
  }, [user]);

  const consultasHoje = agendamentos.filter(a => a.data === new Date().toISOString().slice(0, 10));

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress /></Box>;
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>Dashboard do Médico</Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>Bem-vindo(a), {user?.name}!</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h4">{consultasHoje.length}</Typography>
            <Typography color="text.secondary">Consultas Hoje</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h4">{agendamentos.filter(a => a.status === 'Agendada').length}</Typography>
            <Typography color="text.secondary">Consultas Futuras</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Agenda do Dia</Typography>
            <Divider sx={{ mb: 2 }} />
            {consultasHoje.length > 0 ? (
              <List>
                {consultasHoje.map(ag => (
                  <ListItem key={ag.id}>
                    <ListItemText primary={ag.pacienteNome} secondary={`${ag.horario} - ${ag.especialidade}`} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography color="text.secondary">Nenhuma consulta para hoje.</Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}