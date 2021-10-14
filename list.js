const options = require('./options');

const FtpClient = require('ftp');


const ftpClient = new FtpClient();

// list remote dir files through ftp connection
ftpClient.on('ready', () => {
    ftpClient.list('/htdocs', (err, list) => {
        if(err) {
            throw err;
        }
        console.log(list);
        ftpClient.end();
    })
});

// Bear in mind: File permissions options must be setup as well
//TODO

// connection
ftpClient.connect(options);