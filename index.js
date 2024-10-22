const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const alumnos = [
  'Ivan Vallejo',
  'Nil Marquez',
  'Adrian Lozano',
  'Paul Aznar'
];

app.get('/clase', (req, res) => {
  const data = {
    totalAlumnos: alumnos.length,
    integrantes: alumnos
  };
  
  res.json(data);
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});