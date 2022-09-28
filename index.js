const server = require("./server");
const { conn } = require("./server/database/db");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
    //alter: true, force: false      alter: true,
    server.listen(3001, () => {
        console.log(`%s 🚀 listening at 3001 🚀`);  // eslint-disable-line no-console
    });
});
