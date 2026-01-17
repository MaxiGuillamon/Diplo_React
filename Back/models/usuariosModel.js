const pool = require('./bd');

async function getUsuarioByUsernameAndPassword(user, password) {
  const query = `
    SELECT * FROM usuarios
    WHERE usuario = ? AND password = ?
    LIMIT 1
  `;
  const rows = await pool.query(query, [user, password]);
  return rows[0];
}

module.exports = {
  getUsuarioByUsernameAndPassword
};
