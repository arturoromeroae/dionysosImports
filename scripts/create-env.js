const fs = require('fs');

fs.writeFileSync('./.env', `CUSTOM_URL=${process.env.CUSTOM_URL}\n API_PRODUCTS=${process.env.API_PRODUCTS}\n API_CUSTOMER=${process.env.API_CUSTOMER}`);