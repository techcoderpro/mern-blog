import User from '../models/user.model.js';

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password || username === '' || email === '' || password === '') {
    return res.status(400).json({ message: 'All fields are required!' });
  }

 const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  await newUser.save();
  res.json('Signup');
  try {
    await newUser.save();
    res.json('Signup successful');
  } catch (error) {
    next(error);
  }
}