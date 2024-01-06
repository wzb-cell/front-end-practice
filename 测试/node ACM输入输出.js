import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
// let cin = require('readline')
let cin = readline

// const rl = cin.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
const rl = cin.createInterface({
    input: input,
    output: output
});

var iter = rl[Symbol.asyncIterator]();
const readline = async ()=>(await iter.next()).value;

void async function() {
    var line1  = await readline();
    let token1 = line1.split(' '); 
    var line2 =  await readline();
    let token2 = line2.split(' ');
    console.log(line1);
}