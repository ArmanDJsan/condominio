import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import getCSRFTokenFromCookie from '../functions/getCSRFTokenFromCookie';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (email, password) => {
    try {
      const token = getCSRFTokenFromCookie();
      const response = await fetch('http://localhost:8000/api/login', {
          method: 'POST',
          headers: {
              'X-XSRF-TOKEN': token,
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
              email,
              password,
          }),
      });
      if (!response.ok) {
          throw new Error('Inicio de sesión fallido');
      }
      const usuario = await response.json();
      setUser(usuario.user);
      navigate("/dashboard/home");
  }
  catch (error) {
      console.error('Error al iniciar sesión:', error.message);
  }
   
  };

  // call this function to sign out logged in user
  const logout = async () => {
    try {
      const token = getCSRFTokenFromCookie();
      const response = await fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: {
          'X-XSRF-TOKEN': token,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        const errorMessage = `Logout fallido. Código de estado: ${response.status}`;
        throw new Error(errorMessage);
      }
      setUser(null);
      navigate("/", { replace: true });
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
   
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};