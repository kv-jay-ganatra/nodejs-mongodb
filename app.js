/* eslint-disable max-len */
// Load environment variables from a .env file
require('dotenv').config({ override: true });
process.env.NODE_ENV = 'dev';

const app = require('./testapp');
// Define the port for the application, with a fallback to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Application running http://localhost:${port}`);
});
