// src/pages/Pacientes.tsx

import React from 'react';
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
  Button,
  TextField,
  InputAdornment
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

// Dados mockados para a lista de pacientes do médico
const mockPacientes = [
  { id: 1, nome: 'Wesley Alexandre Rodrigues Martins', idade: 32, ultimaConsulta: '2025-07-20' },
  { id: 2, nome: 'Joana Silva', idade: 28, ultimaConsulta: '2025-07-15' },
  { id: 3, nome: 'Carlos Andrade', idade: 45, ultimaConsulta: '2025-06-10' },
];

export default function PacientesPage() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1">
          Meus Pacientes
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          Adicionar Paciente
        </Button>
      </Box>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Box sx={{ p: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Buscar paciente por nome..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <TableContainer>
          <Table stickyHeader aria-label="tabela de pacientes">
            <TableHead>
              <TableRow>
                <TableCell>Nome do Paciente</TableCell>
                <TableCell>Idade</TableCell>
                <TableCell>Última Consulta</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockPacientes.map((paciente) => (
                <TableRow hover key={paciente.id}>
                  <TableCell>{paciente.nome}</TableCell>
                  <TableCell>{paciente.idade}</TableCell>
                  <TableCell>{paciente.ultimaConsulta}</TableCell>
                  <TableCell>
                    <Button variant="outlined" size="small">Ver Prontuário</Button>
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