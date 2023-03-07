const sql = require('./db');

const getUserMessageList = (req, res) => {
  sql.query(
    `SELECT * FROM message, user, motel WHERE message.IdMotel IN 
      (SELECT message.IdMotel FROM message 
      WHERE message.IdUser = ${req.params.IdUser}) 
    AND motel.IdMotel = message.IdMotel 
    AND message.IdUser != ${req.params.IdUser} 
    AND user.IdUser = message.IdUser 
    GROUP BY message.IdMotel 
    ORDER BY message.CreateDay DESC`,
    (err, result) => {
      if (err) {
        return res.status(400).send({ msg: err });
      }
      return res.status(200).send({
        msg: 'Get message in successfully!',
        message: result,
      });
    },
  );
};

const getAllMessagesUserInMotel = (req, res) => {
  sql.query(
    `
    SELECT * FROM user, message, motel 
    WHERE user.IdUser = message.IdUser 
    AND message.IdMotel = motel.IdMotel 
    AND motel.IdMotel = ${req.params.IdMotel}
  `,
    (err, result) => {
      if (err) {
        return res.status(400).send({ msg: err });
      }
      return res.status(200).send({
        msg: 'Get chat in successfully!',
        chat: result,
      });
    },
  );
};

const getAllMessage = (req, res) => {
  sql.query('SELECT * FROM message', (err, result) => {
    if (err) {
      return res.status(400).send({ msg: err });
    }
    return res.status(200).send({
      msg: 'Get message in successfully!',
      message: result,
    });
  });
};

const getAllMessageActive = (req, res) => {
  sql.query('SELECT * FROM message WHERE active = 1', (err, result) => {
    if (err) {
      return res.status(400).send({ msg: err });
    }
    return res.status(200).send({
      msg: 'Get message in successfully!',
      message: result,
    });
  });
};

const getAllMessageInMotel = (req, res) => {
  sql.query(
    `SELECT * FROM message, user WHERE active = 1 AND IdMotel = ${req.params.IdMotel}`,
    (err, result) => {
      if (err) {
        return res.status(400).send({ msg: err });
      }
      return res.status(200).send({
        msg: 'Get message by motel in successfully!',
        message: result,
      });
    },
  );
};

module.exports = {
  getUserMessageList,
  getAllMessagesUserInMotel,

  
  getAllMessage,
  getAllMessageActive,
  getAllMessageInMotel,
};
