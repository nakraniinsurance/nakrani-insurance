const express = require('express');
const path = require('path');

const app = express();

// IMPORTANT: Render port
const PORT = process.env.PORT || 3000;

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});