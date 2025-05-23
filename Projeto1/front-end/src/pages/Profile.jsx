import React, { useState } from "react";

const Profile = ({ user, setUser }) => {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(user);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    setForm({ ...form, avatar: file });
  };

  const handleSave = () => {
    setUser(form);
    setEditing(false);
  };

  return (
    <div className="profile">
      <h2>Perfil</h2>
      <img src={form.avatar} alt="Avatar" width={100} height={100} />
      {editing && <input type="file" onChange={handleImageUpload} />}
      <div>
        <label>Usuário:</label>
        {editing ? (
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        ) : (
          <p>{form.username}</p>
        )}
      </div>
      <div>
        <label>Email:</label>
        <p>{form.email}</p>
      </div>
      <div>
        <label>Senha:</label>
        <p>{"*".repeat(form.password.length)}</p>
      </div>
      <button onClick={() => setEditing(!editing)}>
        {editing ? "Salvar" : "Editar"}
      </button>
      {editing && <button onClick={handleSave}>Confirmar</button>}
    </div>
  );
};

export default Profile;
