const ok = async (req, res) => {
  try {
    res.status(200).json({ status: 'Running' });
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = { ok };
