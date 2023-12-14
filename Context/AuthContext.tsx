import React, { createContext, useContext, useState } from 'react';

interface User {
  username: string;
  password: string;
}

interface AuthContextProps {
  user: User | null;
  login: (userData: User) => Promise<void>; // Обновление типа на Promise<void>
  logout: () => void;
  getUser: () => User | null;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: () => Promise.resolve(), // Инициализация Promise с пустым разрешением
  logout: () => {},
  getUser: () => null,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Проверка учетных данных пользователя (здесь это просто имитация)
        if (userData.username === 'example' && userData.password === 'password') {
          setUser(userData); // Установка пользователя при успешной аутентификации
          resolve(); // Разрешение Promise при успешной аутентификации
        } else {
          reject(new Error('Неправильные учетные данные')); // Отклонение Promise при ошибке аутентификации
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
  };

  const getUser = () => {
    return user;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};
