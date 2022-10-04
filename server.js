import express from 'express';
import bcrypt from 'bcrypt';

const app = express();

app.use(express.json());
app.listen(3001, () => console.log('server ok!'));

const users = []; //a modo de prueba creo un obj y lo uso de acceso directo

app.get('/users', (req, res) => res.json(users)); //no se da acceso a cualquiera a users, esto es una prueba

app.post('/users', async (req, res) => {
  try {
    const genHash = await bcrypt.hash(req.body.pass, 10);
    console.log('avhe: ', genHash);
    const user = {
      name: req.body.name,
      pass: genHash,
    };
    users.push(user);
    res.status(201).send({ message: 'post ok' });
  } catch (error) {
    res.json({ message: error.message });
  }
});

app.post('/users/login', async (req, res) => {
  const user = await users.find((user) => user.name === req.body.name);
  if (!user) {
    return res.status(404).send('User not found!');
  }
  try {
   await bcrypt.compare(req.body.pass, user.pass) ? res.send('You are in! Welcome :D') : res.send('Incorrect Password! :x')
  } catch (error) {
    res.status(400).send(error.message)
  }
});
