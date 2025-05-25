const db = require('../db');


const getAllProducts = (req, res) => {
    const sql = 'SELECT * FROM Productos';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('❌ Error fetching products:', err);
            return res.status(500).json({ error: 'Error fetching products' });
        }
        console.log('✅ Products fetched successfully');
        res.json(result);
    });
};

module.exports = {
    getAllProducts
};