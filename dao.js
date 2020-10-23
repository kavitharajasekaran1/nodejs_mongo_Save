const mongoose = require('mongoose');
mongoose.connect('mongodb://kavitharajasekaran:Pavankumar2007@ds159033.mlab.com:59033/testing', {useUnifiedTopology: true,useNewUrlParser: true })
// mongoose.connect("mongodb://localhost:27017/node-demo",{useUnifiedTopology: true,useNewUrlParser: true })
.then(() => {
    console.log('connected to mongoDB');
})
.catch((error) => {
    console.log('Some error Occured in Connecting with DataBase',error);
});