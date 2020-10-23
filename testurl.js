var schema = require("./schema")
function testurl(frontend_request, token) {
    return new Promise(async (resolve, reject) => {

        var userid = frontend_request.userid;
        var password = frontend_request.password;

        var login = schema.loginDetails({
            userid :userid,
            password: password
        })
        login.save()
            return resolve({
                result:"details saved successfully"
            })

       



    })
}

module.exports ={
    testurl :testurl
}

