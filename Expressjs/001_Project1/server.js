const express = require('express');
const connectDB = require('./db'); // Use function instead of object
const User = require('./models/user');
const app = express();

app.use(express.json());

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send("Hii my dear friends");
});

app.post('/user', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json(newUser);
    console.log("✅ Data saved");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/user', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("🚀 Server is running on http://localhost:3000");
});
