
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db');

const app = express();
const port = process.env.PORT || 3000;
const productRoutes = require('./routes/productosRoutes');

app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes);

app.get('/api/ping', (req, res) => {
    res.json({ message: '✅ Backend working' });
});

app.listen(port, () => {
    console.log(`🚀 Server listening in http://localhost:${port}`);
});

