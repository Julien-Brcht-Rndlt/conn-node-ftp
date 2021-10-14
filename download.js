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
        ftpClient.get('catalog-remote.csv', (err, stream) => {
            if (err) {
                throw err;
            }
            stream.once('close', () => {
                ftpClient.end();
            });
            stream.pipe(fs.createWriteStream('catalog-remote.csv'));
        });
    });
});


ftpClient.connect(options);