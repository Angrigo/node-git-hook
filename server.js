const util = require('util');
const exec = util.promisify(require('child_process').exec);
var {sequelize, models} = require("./database/index");
var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());

async function pullGuestControl(what) {
  const { stdout, stderr } = await exec('cd /var/www/guestControl/'+what+' && /usr/bin/git pull');
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}

app.get('/', async function (req, res) {
  res.send("HELLO")
});

app.post('/server', async function (req, res) {
  pullGuestControl("server");
  res.send("SERVER UPDATED")
});

app.post('/client', async function (req, res) {
  pullGuestControl("client");
  res.send("CLIENT UPDATED")
});

app.post('/mobile', async function (req, res) {
  pullGuestControl("mobile");
  res.send("MOBILE UPDATED")
});

app.listen(4321, function () {
  console.log('Listening on port 4321!');
});
