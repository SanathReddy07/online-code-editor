const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const executeRoute = require('./routes/execute');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/execute', executeRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
