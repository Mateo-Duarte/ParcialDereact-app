import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../assets/styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://parcial.nucleoslabs.com.co/api/v1/usuarios/login", {
        email,
        password,
      });
      
      Swal.fire({
        icon: "success",
        title: "Login exitoso",
        text: "Has iniciado sesión correctamente.",
      });
      navigate("/productos");
    } catch (error) {
      let errorMessage = "Error al iniciar sesión";

      if (error?.response?.data?.message) {
        errorMessage = `Error al iniciar sesión: ${error.response.data.message}`;
      }

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    }
  };

  return (
    <div className="container-background">
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
