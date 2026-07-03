const db = require("../config/db");

const getProfile = (req, res) => {
  const sql = `
    SELECT
      id,
      fullname,
      email,
      merchant_type,
      category,
      created_at
    FROM users
    WHERE id = ?
  `;

  db.query(sql, [req.user.id], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      profile: result[0],
    });
  });
};

module.exports = {
  getProfile,
};