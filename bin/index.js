#!/usr/bin/env node
const yargs = require("yargs");
const nikParse = require('../src/nik_parse')
const data = require('../data/data.js')

const options = yargs
 .usage("Usage: -n <nik>")
 .option("n", { alias: "nik", describe: "Nomor Induk Kependudukan", type: "string", demandOption: true })
 .argv;

 nikParse(options.nik, data, function(data){
    console.log(data)
 })

