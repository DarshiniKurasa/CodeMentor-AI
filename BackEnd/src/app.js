const express = require('express');
const aiRoutes = require('./routes/ai.routes.js'); 
const cors = require('cors');


const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/ai', aiRoutes);

module.exports = app; // ✅ Use module.exports instead of export default
