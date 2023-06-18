#!/usr/bin/env node
// sheabang syntax
let inputArr = process.argv.slice(2);
import fs from "fs";
import path from 'path';
import helpObj from "./commands/help.js";
import treeObj from "./commands/tree.js";
import organizeObj from "./commands/organize.js";


// write in terminal
// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help

let command = inputArr[0];
switch (command) {
    case "tree":
        treeObj(inputArr[1]);
        break;
    case "organize":
        organizeObj(inputArr[1]);
        break;
    case "help":
        helpObj();
        break;
    default:
        console.log("🙏Please Input right Command");
        break;
}

