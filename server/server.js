const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432, // Порт по умолчанию для PostgreSQL
});

app.use(
  '/api', // Путь, который будет проксироваться
  createProxyMiddleware({
    target: 'http://localhost:3000', // Указываем адрес, на котором запущен Next.js (обычно порт 3000)
    changeOrigin: true,
    ws: true, 
  })
);

app.get('/', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM projects');
    const projects = result.rows;
    client.release();
    res.json(projects);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Error retrieving projects');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


