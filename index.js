const server = require("./server");
const { conn } = require("./server/db.js");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
    //alter: true, force: false      alter: true,
    server.listen(3001, () => {
        console.log("%s listening at 3001", "localhost"); // eslint-disable-line no-console
    });
});
