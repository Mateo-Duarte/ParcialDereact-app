import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; 
import "../assets/styles.css";

const Registro = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://parcial.nucleoslabs.com.co/api/v1/usuarios/registrar", {
        name,
        lastname,
        email,
        password,
      });
      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "El usuario ha sido registrado correctamente.",
      });
      navigate("/login");
    } catch (error) {
      let errorMessage = "Error al registrar el usuario";

      if (error.response && error.response.data) {
        const { message } = error.response.data;
        errorMessage = `${errorMessage}: ${message}`;
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
      <div className="register-container">
        <h2>Registro de Usuario</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Apellido:
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </label>
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
          <button type="submit">Registrar</button>
        </form>

        
        <p>
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login">Inicia sesión aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default Registro;
