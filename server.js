const express = require('express');
const app = express();
const port = 5000; // Your port number

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html'); // Fix the path separator
});

// Start the server and listen on all available network interfaces
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is listening at http://0.0.0.0:${port}`);
});
