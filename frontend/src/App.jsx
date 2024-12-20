import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";
import Favorites from "./pages/Favorites";
import SingleMovie from "./pages/SingleMovie";
import NotFound from "./pages/NotFound";
import { AuthContextProvider } from "./contexts/AuthContext";
import { MovieProvider } from "./contexts/MovieContext";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <AuthContextProvider>
      <MovieProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movie/:movieId" element={<SingleMovie />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer />
        </MainLayout>
      </MovieProvider>
    </AuthContextProvider>
  );
};

export default App;
