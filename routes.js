const express = require('express');
const router = express.Router();
const executeCode = require('../utils/executor');

// @route   POST /execute
// @desc    Execute code
router.post('/execute', (req, res) => {
    const { language, code } = req.body;

    executeCode(language, code, (error, output) => {
        if (error) {
            return res.status(400).json({ error });
        }
        res.json({ output });
    });
});

module.exports = router;
