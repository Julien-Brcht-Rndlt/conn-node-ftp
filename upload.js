const options = require('./options');

const FtpClient = require('ftp');

const ftpClient = new FtpClient();

// upload file to server
const fs = require('fs');

ftpClient.on('ready', () => {
    ftpClient.cwd('/htdocs', (err) => {
        if(err) {
            throw err;
        }
        ftpClient.put('catalog.csv', 'catalog-remote.csv', (err) => {
            if (err) {
                throw err;
            }
            ftpClient.end();
        });
    });
});


ftpClient.connect(options);