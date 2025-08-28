const mongoose = require('mongoose');

/*const connectionString = 
"mongodb+srv://daniel09olivares:zkeVEHrrCMuZMmkt@cluster0.ofjfs3i.mongodb.net/";
mongoose
.connect(connectionString,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});*/

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
}

module.exports = connectDB;