const fs = require('fs');

fs.writeFileSync('./.env', `CUSTOM_URL=${process.env.CUSTOM_URL}\n API=${process.env.API}`);