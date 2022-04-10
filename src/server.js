const app = require("./index.js");

const connect = require("./configs/db.js");
app.listen(5539, async () => {
    try{

         await connect();
         console.log("Listening on port number 5538")

    } catch(err){
        console.log("Error",err);
    }
})

// module.exports = connect