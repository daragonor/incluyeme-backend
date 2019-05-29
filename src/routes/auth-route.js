const express = require('express');
const router = express.Router();
var request = require("request");

router.post('/login', (req, res) => {
    let jsonBody = {
        params:{
            password:'aragon2A@',
            deviceId:'4619de4f81cab795',
            username:'u201510923',
            lang:'es',
            versionId:'2.0.0',
            os_version:'3.10.73-ge0bfb9b',
            model:'Nexus+6P' 
        },
        appId:"2418553555815728",
        methodName:"invoke"
    }
    let jsonHeader = {
        deviceId:'4619de4f81cab795',
        osversion:'3.10.73-ge0bfb9b',
        model:'Nexus 6P',
        clientID:'2',
        clientVersion:'1.0',
        'x-zubron-uniqueid':'DFF94961B75C791D690D36B1B6D9A2F8D4BC78C3DD7A868C4CDD10FBD7F6280F'
    }
    let jsonBodyString = JSON.stringify(jsonBody)
    let jsonHeaderString = JSON.stringify(jsonHeader)
    let body = encodeURIComponent(jsonBodyString)
    request.post({
        headers:jsonHeaderString,
        url: 'https://upc.mooestro.com/moofwd-rt/2418553555815728/login/authLoginClient',
        formData: body
    }, (error, response, body) => {
        if(error) {
            return console.log(error);
        }
        console.log(body);
    })
/*
    Request.post({
        "headers": { 
            "deviceId":"4619de4f81cab795",
            "osversion":"3.10.73-ge0bfb9b",
            "model":"Nexus 6P",
            "Content-Type":"text/plain",
            "clientID":"2",
            "clientVersion":"1.0",
            "x-zubron-uniqueid":"DFF94961B75C791D690D36B1B6D9A2F8D4BC78C3DD7A868C4CDD10FBD7F6280F"},
        "url": "https://upc.mooestro.com/moofwd-rt/2418553555815728/login/authLoginClient",
        "body": body
    }, (error, response, body) => {
        if(error) {
            return console.log(error);
        }
        console.log(body);
    });*/
});

module.exports = router;