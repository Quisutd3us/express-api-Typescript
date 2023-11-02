"use strict";
const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.json({
        res: true,
        msg: "Every OK!!",
    });
});
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});
