// src/components/layout/Sidebar.tsx
import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

// Importando Ícones
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';

// Listas de menu para cada perfil
const pacienteMenu = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Agendamentos', icon: <EventIcon />, path: '/agendamentos' },
];

const medicoMenu = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Pacientes', icon: <GroupIcon />, path: '/pacientes' },
];

const adminMenu = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Usuários', icon: <GroupIcon />, path: '/usuarios' },
  { text: 'Relatórios', icon: <BarChartIcon />, path: '/relatorios' },
];


export default function Sidebar() {
  const { user } = useAuth();
  let menuItems = [];

  // Define o menu com base no perfil do usuário
  switch (user?.role) {
    case 'paciente':
      menuItems = pacienteMenu;
      break;
    case 'medico':
      menuItems = medicoMenu;
      break;
    case 'admin':
      menuItems = adminMenu;
      break;
    default:
      break;
  }
  
  return (
    <Box sx={{ width: 240 }} role="presentation">
      <List>
        <ListItem>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={user?.name} secondary={user?.role} />
        </ListItem>
        <Divider />
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding component={Link} to={item.path} sx={{ color: 'inherit', textDecoration: 'none' }}>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}