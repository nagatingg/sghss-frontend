import { useAuth } from '../contexts/AuthContext';
import DashboardPaciente from './DashboardPaciente';
import DashboardMedico from './DashboardMedico';
import DashboardAdmin from './DashboardAdmin';
import { Navigate } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useAuth();

  // Renderiza o dashboard correspondente com base no perfil do usuário.
  switch (user?.role) {
    case 'paciente':
      return <DashboardPaciente />;
    case 'medico':
      return <DashboardMedico />;
    case 'admin':
      return <DashboardAdmin />;
    default:
      // Caso não haja um usuário logado ou com perfil válido, redireciona para a página de login.
      return <Navigate to="/login" />;
  }
}