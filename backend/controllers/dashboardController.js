const db = require("../config/db");

const dashboard = (req, res) => {

  const sql = "SELECT fullname,email,merchant_type,category FROM users WHERE id=?";

  db.query(sql, [req.user.id], (err, result) => {

    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.status(200).json({
      success: true,
      dashboard: result[0],
    });

  });

};

module.exports = {
  dashboard,
};