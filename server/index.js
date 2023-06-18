const express = require('express');
const next = require('next');
const cache = require('memory-cache');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const db = require('./db/index.js');
const jwt = require('./auth/jwt.js');
const hash = require('./auth/hash.js');

const port = process.env.PORT || 3000;

async function encrypt(req, res, next) {
  let encryptedPassword = await hash.encrypt(req.body.password);

  req.body.password = encryptedPassword;
  next();
}

async function authenticate(req, res, next) {
  let user = await db.getUser(req.body);

  if (!user) {
    res.status(401).send("Can't authenticate email");
  } else if (!(await hash.comparePassword(req.body.password, user.password))) {
    res.status(401).send("Can't authenticate password");
  } else {
    req.user = user;
    next();
  }
}

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    // server.use((req, res, next) => {
    //     const key = req.url;
    //     const cachedData = cache.get(key);

    //     if (cachedData) {
    //       res.setHeader('X-Cache', 'HIT'); // Optional: Set a custom header to indicate cache hit
    //       res.send(cachedData);
    //     } else {
    //       next();
    //     }
    // });

    server.post('/login', authenticate, async (req, res) => {
      const token = jwt.generateToken(req.user);
      res.status(200).json(token);
    });

    server.post('/register', encrypt, db.register);

    server.post('/calendar', async (req, res) => {
      try {
        await db.saveData(req.body);
        res.status(200).send('Data sent to the database yeet');
      } catch (err) {
        console.error(err);
        res.status(500).send('An error occured');
      }
    });

    server.get('*', (req, res) => {
      handle(req, res);
    });

    server.listen(port, (req, res) => {
      console.log(`Server is up on port ${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
