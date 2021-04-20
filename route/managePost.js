const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');

router.get('/managePost', function (request, response) {
    conn.query('SELECT * FROM contents ', function (error, result, fields) {
        if (!error) {
            response.render('posts/admin', { contents: result });
        } else {
            console.log(error);
        }
    })
});

module.exports = router;
