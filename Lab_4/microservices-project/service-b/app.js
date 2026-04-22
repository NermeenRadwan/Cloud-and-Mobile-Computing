const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "Hello from Service B"
    });
});

app.listen(4000, () => console.log("Service B running on port 4000"));
