// src/services/api.ts

export interface Agendamento {
  id: number;
  pacienteId: string;
  pacienteNome: string;
  medicoId: string;
  medicoNome: string;
  data: string;
  horario: string;
  tipo: 'Consulta' | 'Exame' | 'Telemedicina';
  especialidade: string;
  status: 'Agendada' | 'Realizada' | 'Cancelada';
}

const agendamentos: Agendamento[] = [
    { id: 1, pacienteId: 'paciente@sghss.com', pacienteNome: 'Wesley Alexandre Rodrigues Martins', medicoId: 'medico@sghss.com', medicoNome: 'Dr. Wesley Alexandre Rodrigues Martins', data: '2025-07-20', horario: '10:00', tipo: 'Consulta', especialidade: 'Cardiologia', status: 'Agendada' },
    { id: 2, pacienteId: 'paciente@sghss.com', pacienteNome: 'Wesley Alexandre Rodrigues Martins', medicoId: 'medico@sghss.com', medicoNome: 'Dr. Wesley Alexandre Rodrigues Martins', data: '2025-06-15', horario: '14:30', tipo: 'Exame', especialidade: 'Raio-X', status: 'Realizada' },
    { id: 3, pacienteId: 'joana.silva@email.com', pacienteNome: 'Joana Silva', medicoId: 'medico@sghss.com', medicoNome: 'Dr. Wesley Alexandre Rodrigues Martins', data: '2025-07-15', horario: '11:00', tipo: 'Consulta', especialidade: 'Cardiologia', status: 'Agendada' },
];

export const getAgendamentosPorPaciente = (email: string): Promise<Agendamento[]> => {
  return new Promise(resolve => {
    // Adicionando um log para depuração
    console.log("Buscando agendamentos para o paciente com email:", email);
    
    if (!email) {
      console.error("Email do paciente não fornecido para getAgendamentosPorPaciente.");
      resolve([]); // Retorna uma lista vazia se não houver email
      return;
    }

    setTimeout(() => {
      const resultado = agendamentos.filter(ag => ag.pacienteId === email);
      console.log("Agendamentos encontrados:", resultado);
      resolve(resultado);
    }, 500);
  });
};

export const getAgendamentosPorMedico = (email: string): Promise<Agendamento[]> => {
  return new Promise(resolve => {
    // Adicionando um log para depuração
    console.log("Buscando agendamentos para o médico com email:", email);

    if (!email) {
      console.error("Email do médico não fornecido para getAgendamentosPorMedico.");
      resolve([]); // Retorna uma lista vazia se não houver email
      return;
    }

    setTimeout(() => {
      const resultado = agendamentos.filter(ag => ag.medicoId === email);
      console.log("Agendamentos encontrados:", resultado);
      resolve(resultado);
    }, 500);
  });
};

export interface User {
  id: string;
  email: string;
  role: 'paciente' | 'medico' | 'admin';
  name: string;
  status: 'Ativo' | 'Inativo';
}

const allUsers: User[] = [
  { id: 'paciente@sghss.com', email: 'paciente@sghss.com', role: 'paciente', name: 'Wesley Alexandre Rodrigues Martins', status: 'Ativo' },
  { id: 'medico@sghss.com', email: 'medico@sghss.com', role: 'medico', name: 'Dr. Wesley Alexandre Rodrigues Martins', status: 'Ativo' },
  { id: 'admin@sghss.com', email: 'admin@sghss.com', role: 'admin', name: 'Admin', status: 'Ativo' },
  { id: 'joana.silva@email.com', email: 'joana.silva@email.com', role: 'paciente', name: 'Joana Silva', status: 'Ativo' },
  { id: 'carlos.andrade@email.com', email: 'carlos.andrade@email.com', role: 'paciente', name: 'Carlos Andrade', status: 'Inativo' },
];

// Função que simula a busca de todos os usuários
export const getAllUsers = (): Promise<User[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(allUsers);
    }, 300); // Simula um pequeno atraso
  });
};