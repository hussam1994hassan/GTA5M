import User from "../models/user.model.js";

export async function getAllUsers(req, res) {
    const users = await User.findAll();
    res.json(users);
}

export async function createUser(req, res) {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
}
