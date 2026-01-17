const pool = require('./bd');


async function getNovedades() {
    const query = "select * from novedades order by id desc";
    const rows = await pool.query(query);
    return rows;
}

async function insertNovedad(obj) {
    try {
        const query = "insert into novedades set ?";
        const rows = await pool.query(query, obj);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    getNovedades,
    insertNovedad
};
