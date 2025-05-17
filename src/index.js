#! /usr/bin/env node
const utils = require("./utils");
const path = require("path");

const yargs = require("yargs");

if (yargs.argv._[0] == null) {
    console.log("No arguments provided");
    return;
}

if (yargs.argv._[0] === "theme") {
    const root = path.join(__dirname, '..');
    const themeName = yargs.argv._[1] || "my-theme";
    if (themeName.includes(".") || themeName.includes("/")) {
        console.log("Invalid theme name. Theme name should not contain '.' or '/'");
        return;
    }
    utils.wpTheme(root, themeName);
} else {
    console.log("Invalid arguments...");
    console.log("Usage: zip-cli theme [theme-name]");
    console.log("Usage: zip-cli theme my-theme");

    return;
}




