// src/pages/Agendamentos.tsx

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Chip,
  Button
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useAuth } from '../contexts/AuthContext';
import { getAgendamentosPorPaciente } from '../services/api';
import type { Agendamento } from '../services/api';

// Função para dar cor ao status do agendamento
const getStatusChipColor = (status: Agendamento['status']) => {
  switch (status) {
    case 'Agendada':
      return 'primary';
    case 'Realizada':
      return 'success';
    case 'Cancelada':
      return 'error';
    default:
      return 'default';
  }
};

export default function AgendamentosPage() {
  const { user } = useAuth();
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [loading, setLoading] = useState(true);

  // Busca os dados de agendamento assim que o componente é carregado
  useEffect(() => {
    if (user?.id) {
      getAgendamentosPorPaciente(user.id).then(data => {
        setAgendamentos(data);
        setLoading(false);
      });
    }
  }, [user]);

  // Mostra uma animação de carregamento enquanto os dados são buscados
  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress /></Box>;
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1">
          Meus Agendamentos
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          Novo Agendamento
        </Button>
      </Box>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer>
          <Table stickyHeader aria-label="tabela de agendamentos">
            <TableHead>
              <TableRow>
                <TableCell>Especialidade</TableCell>
                <TableCell>Médico</TableCell>
                <TableCell>Data</TableCell>
                <TableCell>Horário</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {agendamentos.map((ag) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={ag.id}>
                  <TableCell>{ag.especialidade}</TableCell>
                  <TableCell>{ag.medicoNome}</TableCell>
                  <TableCell>{ag.data}</TableCell>
                  <TableCell>{ag.horario}</TableCell>
                  <TableCell>
                    <Chip label={ag.status} color={getStatusChipColor(ag.status)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}