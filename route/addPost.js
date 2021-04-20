const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');

router.get('/addPost', function (req, res) {
    res.render('posts/create')
});

router.post('/addPost', function (request, response) {
    var title = request.body.title;
    var body = request.body.body;
    var image = request.files.image;
    var fileName = image.name;
    image.mv('./public/images/' + fileName);
    if (title  && body && image) {
        conn.query("INSERT INTO contents (title,  body, image) VALUES(?,?,?)", [title, body, fileName],
            function (error, results, fields) {
                console.log(results);
                if (!error ) {
                    response.redirect('/managePost');
                } else {
                    console.log(error);
                }
            });
    }
});

module.exports = router;