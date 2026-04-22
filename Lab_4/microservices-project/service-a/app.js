const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://service-b:4000/');
        res.json({
            message: "Hello from Service A",
            serviceB: response.data
        });
    } catch (error) {
        res.status(500).json({
            message: "Error calling Service B",
            error: error.message
        });
    }
});

app.listen(3000, () => console.log("Service A running on port 3000"));
