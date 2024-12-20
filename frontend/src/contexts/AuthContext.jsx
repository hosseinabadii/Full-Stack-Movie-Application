import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCurrentUser, registerUser, loginUser } from "../services/api";

const AuthContext = createContext();
const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token")
  );

  useEffect(() => {
    if (!accessToken) return;
    const getCurrenctUser = async () => {
      try {
        const currentUser = await fetchCurrentUser(accessToken);
        currentUser && setUser(currentUser);
      } catch (error) {
        console.log("Failed to fetch current user:", error.message);
        if (error.response?.status === 401) {
          localStorage.removeItem("access_token");
        }
      }
    };
    getCurrenctUser();
  }, [accessToken]);

  const register = async (userData) => {
    const user = await registerUser(userData);
    user && navigate("/login", { replace: true });
  };

  const login = async (username, password) => {
    const token = await loginUser(username, password);
    if (token?.access_token) {
      localStorage.setItem("access_token", token.access_token);
      setAccessToken(token.access_token);
      navigate("/", { replace: true });
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setAccessToken(null);
    setUser(null);
    navigate("/", { replace: true });
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuthContext, AuthContextProvider };
