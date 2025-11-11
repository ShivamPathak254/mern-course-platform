// const User = require('../models/Users');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// exports.register = async (req, res) => {
//   const { name, email, password, role } = req.body;
//   const hashed = await bcrypt.hash(password, 10);
//   const user = new User({ name, email, password: hashed, role });
//   await user.save();
//   res.status(201).json({ message: 'Registered successfully' });
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

//   const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
//   res.json({ token, user: { id: user._id, name: user.name, role: user.role } });
// };


const User = require('../models/Users'); // Ensure filename matches
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already registered" });

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashed, role });
    await user.save();

    res.status(201).json({ message: "Registered successfully" });
  } catch (error) {
    console.error("Register error:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user: { id: user._id, name: user.name, role: user.role },
    });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

