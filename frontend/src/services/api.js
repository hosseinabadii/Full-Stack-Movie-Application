import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({ baseURL: "http://localhost:8000" });

const registerUser = async (userData) => {
  const response = await api
    .post("/auth/register", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch((error) => {
      console.log("Registration failed:", error);
      toast.error(error.response?.data?.detail || "Something went wrong!");
    });

  return response.data;
};

const loginUser = async (username, password) => {
  const data = { username, password };

  const response = await api
    .post("/auth/token", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .catch((error) => {
      console.log("Login failed:", error);
      toast.error(error.response?.data?.detail || "Something went wrong!");
    });

  return response.data;
};

const fetchCurrentUser = async (accessToken) => {
  const response = await api
    .get("/users/me/", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .catch((error) => {
      console.log(
        "Registration failed:",
        error.response?.data?.detail || "Something went wrong!"
      );
      throw error;
    });
  return response?.data;
};

export { registerUser, loginUser, fetchCurrentUser };
