import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser'
import { User } from './model/user';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('dist'));

app.post('/api/user', (req: express.Request, res: express.Response) => {
  const product = new User(
    {
      username: req.body.username,
    }
  );

  product.save(err => {
    if (err) {
      console.log(err);
    }
    res.send('User Created successfully')
  })
});
app.get('/api/user/:username', (req: express.Request, res: express.Response) => {
  User.findOne({ username: req.params.username }, (err, user) => {
    if (err) {
      console.log(err);
    }
    res.send(user);
  });
});


const dev_db_url = 'mongodb://herolens:q1w2e3r4@ds227674.mlab.com:27674/herolens-interview';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

mongoose.connect(mongoDB).then(m => {
  app.listen(8081, () => console.log('Listening on port 8081!'));
});
