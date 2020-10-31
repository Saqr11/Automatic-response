const express = require("express");
const app = express();

app.listen(() => console.log("start btrolie"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

//لا تلعب اي شي في الكود



const prefix = ""
const developers = ""

////////



   

      

      

      



     










client.on('message', prof => {
    if(prof.content.endsWith(prefix + 'help')) {
        var professor = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setTitle('Code Help | and server support اوتاوا || OTTAWA')
        .setURL('https://discord.gg/Cdeb9Jg')
        .setDescription(`${prefix} help-1`)
        .setFooter(`Requested By | ${prof.author.tag}`, prof.author.avatarURL);
        prof.channel.send(professor);
    }
});
client.on('message', prof => {
    if(prof.author.bot) return;
    if(!prof.content.startsWith(prefix)) return;
     if(prof.content.startsWith(prefix + 'help-1'))
     var professor = new Discord.MessageEmbed()
     .setAuthor(client.user.username, client.user.avatarURL)
     .setThumbnail(client.user.avatarURL)
     .setTitle('Code Help | and server support اوتاوا || OTTAWA')
     .setURL('https://discord.gg/Cdeb9Jg')
     .setDescription(`اكتب الاوامر الي تعجبك`)
     .setFooter(`Requested By | ${prof.author.tag}`, prof.author.avatarURL);
     prof.author.send(professor);
});




client.login(process.env.token);
