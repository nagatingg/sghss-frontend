// src/contexts/AuthContext.tsx

import React, { createContext, useState, useContext } from 'react';

const mockUsers = [
  { id: 'paciente@sghss.com', email: 'paciente@sghss.com', password: '123', role: 'paciente', name: 'Wesley Alexandre Rodrigues Martins' },
  { id: 'medico@sghss.com', email: 'medico@sghss.com', password: '123', role: 'medico', name: 'Dr. Wesley Alexandre Rodrigues Martins' },
  { id: 'admin@sghss.com', email: 'admin@sghss.com', password: '123', role: 'admin', name: 'Admin' },
];

// Define o formato do nosso contexto - ADICIONE O 'id' AQUI
interface AuthContextType {
  user: { id: string; email: string; role: string; name: string; } | null; // Adicionado 'id: string;'
  login: (email: string, pass: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // ADICIONE O 'id' AQUI TAMBÉM
  const [user, setUser] = useState<{ id: string; email: string; role: string; name: string } | null>(null); // Adicionado 'id: string;'

  const login = (email: string, pass: string) => {
    const foundUser = mockUsers.find(u => u.email === email && u.password === pass);
    if (foundUser) {
      // O 'foundUser' já tem o id, então o setUser funciona corretamente
      setUser(foundUser);
      return true;
    }
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

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider.');
  }
  return context;
}