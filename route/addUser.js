const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');


router.get('/addUser', function (req, res) {
    res.render('users/create')
});

router.post('/addUser', function (request, response) {

    var username = request.body.username;
    var email = request.body.email;
    var password = request.body.password;

    if (  username && email && password) {
        conn.query("INSERT INTO accounts ( username, email, password) VALUES('" + request.body.username + "', '" + request.body.email + "', '" + request.body.password + "')", function () {
            response.redirect('/manageUser');
        });
    }
});


module.exports = router;