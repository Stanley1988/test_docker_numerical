// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Backend Increment');
});

app.get('/increment/:startNumber', (req, res) => {
    let origNumber = 0;
    if(!isNaN(Number(req.params.startNumber))){
        origNumber = Number(req.params.startNumber) + 5
    }else{
        origNumber = 2
    }
    
    res.send('New number is '+origNumber);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});