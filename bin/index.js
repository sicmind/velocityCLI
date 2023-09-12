#! /usr/bin/env node

const fs = require("fs");
const yargs = require("yargs")
const exec = require('child_process').exec
const path = require('path')

const sdir = __dirname
const cwd = process.cwd()


const usage = "\nUsage: velo -f <filename.vm>";
const options = yargs

  .usage(usage)
  .option("f", {
    alias: "file",
    describe: "File to be parsed",
    type: "string",
    demandOption: true
  })
  .help(true)
  .argv;


  var fileDir = path.join(cwd, yargs.argv['f'])
  var jarDir = path.join(sdir, "/java/velocity-validator-1.0.jar")
  var preloadDir = path.join(sdir, "/java/commons-lang3-3.12.0.jar")
   
  velocity_parse = (f) => {
    //console.log(sdir)
    exec(`java -jar "${jarDir}" -preloadJars="${preloadDir}" -preloadVars="stringUtils:org.apache.commons.lang.StringUtils" -file="${f}" -eval`,
      function (error, stdout, stderr) {
        console.log("------------------VELOCITY EVAL START--------------------")
        console.log(stdout);
        //  console.log(stderr);
        if (error !== null) {
          console.log('exec error: ' + error);
        }
           console.log("-----------------------------------------------------")
      });
  }
   
  velocity_parse(fileDir);


//fs.watch(file, {persistent: true}, velocity_parse)

