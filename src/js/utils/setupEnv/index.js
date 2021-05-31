const path = require("path");
const fs = require("fs");

if (fs.existsSync(path.join(process.cwd(), ".env")))
	return;

fs.copyFileSync(path.join(process.cwd(), ".env.example"), path.join(process.cwd(), ".env"));