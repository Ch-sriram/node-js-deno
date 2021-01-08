console.log('This is the first node app.', 'Hello from NodeJS.');

// const fs = require('fs'); // fs => file system module in NodeJS (legacy way of importing)
// import fs = require('fs'); // (way of importing using typescript)
import fs from 'fs'; // latest way of importing

// documentation for fs.writeFileSync() method: https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options
// fs.writeFileSync(<path-to-file>, <content-of-file>)
fs.writeFileSync('hello.txt', 'This is generated from NodeJS\' fs module: \n Hello from NodeJS\n');
