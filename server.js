import Express, { json } from 'express';
import Bcrypt from 'bcrypt';

const app = new Express();

app.use(json());
app.listen(3001, () => console.log('server ok!'));

const users = []; //a modo de prueba creo un obj y lo uso de acceso directo

app.get('/', (req, res) => res.json(users));
