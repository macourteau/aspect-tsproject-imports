import * as libA from '@demo/my-lib-a';
import * as libB from '@demo/my-lib-b';
import http from 'node:http';

console.log(`function from libA returns ${libA.libAFunction()}`);

const server = http.createServer(libB.libBFunction());
server.listen(3000);

console.log(`listening on port 3000`);