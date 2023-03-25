const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended:true
}))
if(process.env.NODE_ENV !=="production"){
    require("dotenv").config({path:"config.env"})
}
mongoose.connect(
    process.env.MONGO_URI
).then(()=>{
    console.log("Connected To The Mongodb Database")
})
if (process.env.NODE_ENV === 'production') {
    //*Set static folder up in production
    app.use(express.static('client/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
  }
const user = require("./routes/User");
app.use(user);

const note = require("./routes/Note");
app.use(note);


app.listen(PORT,()=>{
    console.log("Server is running at Port No", PORT);
})