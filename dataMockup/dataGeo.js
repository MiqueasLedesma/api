const { Geo } = require("../server/database/db")

const geos = [
    {
        name: "La Paz",
        address: "Plaza murillo",
        longitude: -68.13351608868588,
        latitude: -16.495617441622066
    },
    {
        name: "La Paz 2",
        address: "Plaza murillo",
        longitude: -68.1226798484412,
        latitude: -16.49916938864769
    },
    
]

const createGeos = async () => {
    try {
        await geos.map(e => Geo.findOrCreate({
            where: {
                name: e.name,
                address:e.address,
                longitude: e.longitude,
                latitude: e.latitude
            }
        }))
    } catch (error) {
        console.log(error.message);
    }
};


module.exports = { createGeos };
