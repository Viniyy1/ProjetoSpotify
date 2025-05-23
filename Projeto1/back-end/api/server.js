import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { db } from "./connect.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose
  .connect(
    "SUA URL DO MONGODB"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Só vamos trabalhar com os endpoints '/songs' e '/artists'");
});

app.get("/artists", async (req, res) => {
  res.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (req, res) => {
  res.send(await db.collection("songs").find({}).toArray());
});

app.get("/login", async (req, res) => {
  res.send(await db.collection("login").find({}).toArray());
});
app.get("/register", async (req, res) => {
  res.send(await db.collection("register").find({}).toArray());
});
app.get("/profile", async (req, res) => {
  res.send(await db.collection("profile").find({}).toArray());
});
app.get("/users", async (req, res) => {
  res.send(await db.collection("users").find({}).toArray());
});

// Rotas de usuário (cadastro, login, etc.)
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
