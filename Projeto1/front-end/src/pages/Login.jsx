import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [isRegistering, setIsRegistering] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isRegistering ? "register" : "login";

    const response = await fetch(
      `http://localhost:3001/api/users/${endpoint}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );

    const data = await response.json();
    if (response.ok) {
      setUser(data);
      navigate("/profile");
    } else {
      alert(data.message || "Erro ao autenticar");
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? "Criar Conta" : "Entrar"}</h2>
      <form onSubmit={handleSubmit}>
        {isRegistering && (
          <input
            type="text"
            name="username"
            placeholder="Usuário"
            onChange={handleChange}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={handleChange}
          required
        />
        <button type="submit">{isRegistering ? "Cadastrar" : "Entrar"}</button>
      </form>
      <p
        onClick={() => setIsRegistering(!isRegistering)}
        style={{ cursor: "pointer", marginTop: "1rem" }}
      >
        {isRegistering
          ? "Já tem conta? Faça login"
          : "Não tem conta? Cadastre-se"}
      </p>
    </div>
  );
};

export default Login;
