let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {

    res.render('admin/admin-channel', { title: 'Photoboard' });

});


module.exports = router;

// Unused file so far // Some of this code was refactored from a previous project so code might be out of place potentially until we write more