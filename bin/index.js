#!/usr/bin/env node

const yargs = require("yargs");
const U = require('../data/data');
const {nikParse} = require('../src/nik_parse')

const options = yargs
 .usage("Usage: -n <nik>")
 .option("n", { alias: "nik", describe: "Nomor Induk Kependudukan", type: "string", demandOption: true })
 .argv;

 nikParse(options.nik, function(data){
    console.log(data)
 })

