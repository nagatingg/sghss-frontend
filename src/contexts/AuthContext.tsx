import React, { createContext, useState, useContext } from 'react';

// Dados "mockados" dos nossos usuários
const mockUsers = [
  { id: 'paciente@sghss.com', email: 'paciente@sghss.com', password: '123', role: 'paciente', name: 'Wesley Alexandre Rodrigues Martins' },
  { id: 'medico@sghss.com', email: 'medico@sghss.com', password: '123', role: 'medico', name: 'Dr. Wesley Alexandre Rodrigues Martins' },
  { id: 'admin@sghss.com', email: 'admin@sghss.com', password: '123', role: 'admin', name: 'Admin' },
];

// Define o formato do nosso contexto
interface AuthContextType {
  user: { email: string; role: string; name: string } | null;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
}

// Cria o contexto
const AuthContext = createContext<AuthContextType | null>(null);

// Componente "Provedor" que vai envolver nossa aplicação
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ email: string; role: string; name: string } | null>(null);

  const login = (email: string, pass: string) => {
    const foundUser = mockUsers.find(u => u.email === email && u.password === pass);
    if (foundUser) {
      setUser(foundUser);
      console.log('Usuário logado:', foundUser);
      return true;
    }
    console.log('Credenciais inválidas!');
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook customizado para facilitar o uso do contexto
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider.');
  }
  return context;
}