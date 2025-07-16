// src/pages/DashboardPaciente.tsx
import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid, Card, CardContent, Button, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HistoryIcon from '@mui/icons-material/History';
import { useAuth } from '../contexts/AuthContext';
import { getAgendamentosPorPaciente } from '../services/api';
import type { Agendamento } from '../services/api';

export default function DashboardPaciente() {
  const { user } = useAuth();
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.id) {
      getAgendamentosPorPaciente(user.id).then(data => {
        setAgendamentos(data);
        setLoading(false);
      });
    }
  }, [user]);

  const proximaConsulta = agendamentos.find(a => a.status === 'Agendada');

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress /></Box>;
  }

  return (
    <Box>
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', p: 3, mb: 4, borderRadius: 1 }}>
        <Typography variant="h4" component="h1">
          Bem-vindo(a), {user?.name}!
        </Typography>
        <Typography>
          Aqui você pode gerenciar suas consultas e seu histórico de saúde.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                <EventAvailableIcon sx={{ mr: 1 }} />
                Próxima Consulta
              </Typography>
              {proximaConsulta ? (
                <>
                  <Typography sx={{ mt: 1.5 }}>
                    <strong>{proximaConsulta.especialidade}</strong> com {proximaConsulta.medicoNome}
                  </Typography>
                  <Typography color="text.secondary">
                    Data: {proximaConsulta.data} às {proximaConsulta.horario}
                  </Typography>
                </>
              ) : (
                <Typography sx={{ mt: 1.5 }} color="text.secondary">
                  Você não possui consultas agendadas.
                </Typography>
              )}
              <Button component={Link} to="/agendamentos" variant="contained" sx={{ mt: 2 }}>
                Ver Meus Agendamentos
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                <HistoryIcon sx={{ mr: 1 }} />
                Consultas Realizadas
              </Typography>
              <Typography variant="h4" sx={{ mt: 1.5 }}>
                {agendamentos.filter(a => a.status === 'Realizada').length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}