const express = require('express');
const app = express();

const PORT = process.env.PORT || 3003;

// app.use(express.urlencoded({ extended: true }));\

app.listen(PORT, (req, res) => console.log(`App is working on ${PORT}`));