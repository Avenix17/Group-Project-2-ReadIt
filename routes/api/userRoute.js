const router = require('express').Router();
const { User } = require('../../models');



router.get('/', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');

});

router.post('/', (req, res) => {
});

router.put('/:id', (req, res) => {
});

router.delete('/:id', (req, res) => {
});

module.exports = router;
