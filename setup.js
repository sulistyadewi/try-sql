const client = require("./connection")

const characters = `
    DROP TABLE IF EXISTS "characters" ;
    CREATE TABLE "characters" (
        id INTEGER,
        name VARCHAR,
        age INTEGER,
        village VARCHAR
    ) ;
`

client.query(characters, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log("successfully");
    }
    client.end()
})