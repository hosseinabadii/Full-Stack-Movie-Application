import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";

const Login = () => {
  const { login } = useAuthContext();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData.username, formData.password);
  };

  return (
    <div className="w-5/6 sm:w-1/2 mx-auto bg-slate-50 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-4">
        Sign in
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="username" className="mb-2 text-gray-900">
          Username:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          autoComplete="on"
          placeholder="username"
          required
          value={formData.username}
          onChange={handleChange}
          className="border rounded-md border-slate-500 mb-4 p-2"
        />
        <label htmlFor="password" className="mb-2 text-gray-900">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="on"
          placeholder="password"
          required
          value={formData.password}
          onChange={handleChange}
          className="border rounded-md border-slate-500 mb-4 p-2"
        />
        <input
          type="submit"
          value="Sign in"
          className="cursor-pointer bg-gray-800 text-white p-2 px-4 w-20 rounded-md transition duration-200 ease-in-out"
        />
      </form>
    </div>
  );
};

export default Login;
