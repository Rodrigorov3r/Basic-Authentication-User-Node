import express, { json } from 'express';
import Bcrypt from 'bcrypt';

const app = express();

app.use(express.json());
app.listen(3001, () => console.log('server ok!'));

const users = []; //a modo de prueba creo un obj y lo uso de acceso directo

app.get('/users', (req, res) => res.json(users));

app.post('/users', (req, res) => {
  const user = {
    name: req.body.name,
    pass: req.body.pass,
  };
  users.push(user)
  res.status(201).send({message: "post ok"})
});
