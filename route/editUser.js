const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');

router.get('/edit/:id', function (request, response) {
    var id = request.params.id;
    conn.query('SELECT * FROM accounts WHERE id = ?', [id], function (error, result, fields) {
        if (!error) {
            response.render('users/edit', { users: result });
        } else {
            console.error(error);
        }
    })
})

router.post('/edit/:id', function (request, response) {
    var id = request.params.id;
    var username = request.body.username;
    var email = request.body.email;
    var password = request.body.password;
    conn.query('UPDATE accounts SET username = ?, email = ?, password = ? WHERE id = ?', [ username, email, password, id], function (error, result, fields) {
        if (!error) {
            response.redirect('/manageUser');
        } else {
            console.log(error);
        }
    })
})

module.exports = router;