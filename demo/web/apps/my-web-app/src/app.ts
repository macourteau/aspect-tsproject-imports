import * as libA from '@demo/my-lib-a';
import * as libB from '@demo/my-lib-b';
import express from 'express';
import http from 'node:http';

console.log(`function from libA returns ${libA.libAFunction()}`);

const app = libB.libBFunction();
app.use(express.static('.'));

const server = http.createServer(app);
server.listen(3000);

console.log(`listening on port 3000`);
