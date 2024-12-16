const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('New at Networks');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
