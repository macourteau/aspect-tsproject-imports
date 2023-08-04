import * as libA from '@demo/my-lib-a';
import express from 'express';

export function libBFunction(): express.Application {
  console.log(`libA says ${libA.libAFunction()}`);
  return express();
}
