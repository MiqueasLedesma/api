const { Geo } = require('../server/database/db');

const getAllGeolocation = async (req, res) => {
    try {
        await Geo.findAll()
            .then(r => res.send(r));
    } catch (error) {
        console.log(error);
        return res.status(400).send('failed!');
    };
};

module.exports = getAllGeolocation;