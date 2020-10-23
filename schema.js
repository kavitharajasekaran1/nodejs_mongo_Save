const mongoose = require('mongoose')
var Schema = mongoose.Schema;

const login_details = new Schema({
    userid:String,
    password:String,
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now},
    
});
const loginDetails = mongoose.model('loginDetails',login_details);

module.exports={
    loginDetails : loginDetails
}