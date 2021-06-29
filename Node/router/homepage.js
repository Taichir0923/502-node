const express = require('express');
const router = express.Router();
const fs = require('fs');

const data = JSON.parse(fs.readFileSync(`${__dirname}/../data/users.json`));
router.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Тавтай морил',
        users: data.results
    });
    console.log(data.results[0]);
});

router.get('/contact', (req, res) => {
    res.render('contact')
})

module.exports = router;