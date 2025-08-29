exports.getProfile = (req, res) => {
  res.json({ message: 'User profile', user: req.user });
};

exports.getAdmin = (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden: Admins only' });
  }
  res.json({ message: 'Welcome Admin' });
};
