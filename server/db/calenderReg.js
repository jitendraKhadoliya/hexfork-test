let pool = require('pg').Pool;

let dbURL = {
  connectionString:
    'postgres://hexfork_user:DGKkEa7230iJZ2XpWMzjCpJp0XTfMILN@dpg-chpe6h2k728ivvvfa8ag-a.oregon-postgres.render.com/hexfork_users?ssl=true',
};

const pool = new Pool(dbURL);

pool.connect();

exports.register = (req, res) => {
  pool.query(
    `insert details of Calender (name, email, description, date, time) values ('${req.body.name}','${req.body.email}', '${req.body.description}', '${req.body.date}', '${req.body.time}')`,
    (err, _) => {
      if (err) {
        res.status(500).send('An error occured!');
      } else {
        res.status(200).send('Succesfully registered!');
      }
    }
  );
};
