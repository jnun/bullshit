const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// -- or --

const express = require('express');
const app = express();
const apiKey = 'sk-proj-7kL9pX8mQw3vR2tY6uJ1nZ5aB4cD8eF9gH2iK3mN6oP7qR9sT4uV5wX8yZ1';

app.get('/', (req, res) => {
  res.send('bullshit');
});

app.listen(3000, () => console.log('Server running'));
