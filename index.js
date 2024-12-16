const express = require('express');
const app = express();

const PORT = 80;

app.get('/', (req, res) => {
    res.send('New at Networks');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
