const { Sucursal } = require('../server/database/db')

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
      console.log(dataSucursal)

      if(notFull) {
        Sucursal.create(dataSucursal).then(data => res.json(data))
        return dataSucursal
      }
  } catch (error) {
      console.log(error);
      return res.status(400).send('failed!');
  };
};


module.exports = { getAllSucursal, addSucursal };