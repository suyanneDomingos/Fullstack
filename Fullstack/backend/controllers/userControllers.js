const User = require("../models/User");

// Criar um novo usuário
const createUser = async (req, res) => {
  try {
    const { name, email, cpf, birthdate } = req.body;

    // Se birthdate não for fornecido, definimos a data atual como valor padrão
    const userBirthdate = birthdate || new Date().toISOString().split("T")[0];

    const newUser = await User.create({
      name,
      email,
      cpf,
      birthdate: userBirthdate,
    });

    // Retorna o usuário recém-criado com status 201
    return res.status(201).json(newUser);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    return res
      .status(500)
      .json({ error: "Erro ao criar usuário", details: error.message });
  }
};

// Listar todos os usuários
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar usuários" });
  }
};

// Buscar usuário por ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar usuário" });
  }
};

// Atualizar usuário
const updateUser = async (req, res) => {
  try {
    const { name, email, birthdate, cpf } = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    await user.update({ name, email, birthdate, cpf });
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
};

// Remover usuário
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    await user.destroy();
    return res.status(204).send(); // No Content
  } catch (error) {
    return res.status(500).json({ error: "Erro ao remover usuário" });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
