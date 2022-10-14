const { Sucursal, Order } = require('../server/models/Sucursal')

const getAllSucursal = async (req, res) => {
  try {
      await Sucursal.findAll()
          .then(r => res.send(r));
  } catch (error) {
      console.log(error);
      return res.status(400).send('failed!');
  };
};

const addSucursal = async (req, res) => {
  try {
      const { name, address, latitude, longitude } = req.body

      const notFull = name !== "" && address !== "" && latitude !== "" && longitude !== "" ;

      const dataSucursal = { name, address, latitude, longitude}

      if(notFull) {
        Sucursal.create(dataSucursal).then(data => res.json(data))
      }
  } catch (error) {
      console.log(error);
      return res.status(400).send('failed!');
  };
};


module.exports = { getAllSucursal, addSucursal };