const sql = require('./db');

const getProvince = (req, res) => {
  sql.query('SELECT * FROM province', (err, result) => {
    if (err) {
      return res.status(400).send({ msg: err });
    }
    return res.status(200).send({
      msg: 'Get province in successfully!',
      province: result,
    });
  });
};

const getDistric = (req, res) => {
  sql.query(
    `SELECT * FROM district WHERE IdProvince = ${req.params.IdProvince}`,
    (err, result) => {
      if (err) {
        return res.status(400).send({ msg: err });
      }
      return res.status(200).send({
        msg: 'Get district in successfully!',
        district: result,
      });
    },
  );
};

const getWard = (req, res) => {
  sql.query(
    `SELECT * FROM ward WHERE IdDistrict = ${req.params.IdDistrict}`,
    (err, result) => {
      if (err) {
        return res.status(400).send({ msg: err });
      }
      return res.status(200).send({
        msg: 'Get ward in successfully!',
        ward: result,
      });
    },
  );
};

module.exports = {
  getProvince,
  getDistric,
  getWard,
};