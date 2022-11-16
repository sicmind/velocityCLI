#! /usr/bin/env node

const fs = require("fs");
const yargs = require("yargs")
const exec = require('child_process').exec  

const sdir = __dirname 
var file = `${process.cwd()}/test.vm`

const usage = "\nUsage: tran monkey <lang_name> sentence to be translated";
const options = yargs  
      .usage(usage)  
      .option("l", {alias:"languages", describe: "List all supported languages.", type: "boolean", demandOption
: false })                                                                                                    
      .help(true)  
      .argv;
    

velocity_parse = () => {
    exec(`java -jar ${sdir}/java/velocity-validator-1.0.jar -file=${file} -eval`,
      function (error, stdout, stderr){
      //  console.log("--------------------------------------")
        console.log(stdout);
      //  console.log(stderr);
        if(error !== null){
          console.log('exec error: ' + error);
        }
     //   console.log("--------------------------------------")
    });
}

velocity_parse();


fs.watch(file, {persistent: true}, velocity_parse)

