require('dotenv').config();

const FtpClient = require('ftp');

// connection options
const options = {
    host: process.env.FTP_HOST,
    port: process.env.FTP_PORT,
    secure: false,
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
}

module.exports = options;