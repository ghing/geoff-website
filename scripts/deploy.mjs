#!/usr/bin/env node

//require('dotenv').config();
import * as dotenv from "dotenv";
dotenv.config();

//const Client = require("ssh2-sftp-client");
import Client from "ssh2-sftp-client";

const sftp = new Client();

sftp.connect({
    host: process.env.SFTP_HOST,
    username: process.env.SFTP_USERNAME,
    password: process.env.SFTP_PASSWORD
})
.then(() => {
    // HACK: Hard-coded files to upload because I'm too lazy to figure out
    // how to recursively crawl the files.
    return sftp.fastPut("./_site/index.html", "index.html");
})
.then(() => {
    sftp.end();
});