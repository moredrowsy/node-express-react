const dotenv = require('dotenv');
const fs = require('fs');

if (fs.existsSync('.env')) dotenv.config({ path: '.env' });
else dotenv.config({ path: '.env.example' });
