import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import MainLayout from '../components/layout/MainLayout';
import AgendamentosPage from '../pages/Agendamentos';
import PacientesPage from '../pages/Pacientes';
import UsuariosPage from '../pages/Usuarios';
import RelatoriosPage from '../pages/Relatorios';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Rotas Privadas (dentro do Layout) */}
        <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/agendamentos" element={<MainLayout><AgendamentosPage /></MainLayout>} />
        <Route path="/pacientes" element={<MainLayout><PacientesPage /></MainLayout>} />
        <Route path="/usuarios" element={<MainLayout><UsuariosPage /></MainLayout>} />
        <Route path="/relatorios" element={<MainLayout><RelatoriosPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}