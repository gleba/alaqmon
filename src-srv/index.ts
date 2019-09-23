
// when not specifying PouchDB as an argument to the main function, you
// need to specify it like this before requests are routed to ``app``

// app.setPouchDB(PouchDB)
// console.log(PouchDB)
//
//
// var myPouch = new PouchDB('xx');
// app.use((...a)=>{
//   a[1].writeHead(200, { 'Access-Control-Allow-Origin': '*' });
//   console.log(a)
//   a[2]()
//
// });
// // console.log('?')
// app.listen(3000);

// var express = require('express');
// var app = express();
// var InMemPouchDB = PouchDB.defaults({db: require('memdown')});
//

// let idb = require('express-pouchdb')(InMemPouchDB)
// // app.use('/zz', (req, res)=>{
// //
// // })
// // console.log(cors())
// //
// app.get('/', cors(), (req,res)=>{
//   res.send(JSON.stringify({ok:1}))
// })
// app.use('/', idb)
// app.use('/db', (...a)=>{
//   console.log(a[1])
//   a[1].writeHead("Access-Control-Allow-Origin","*")
//   idb(...a)
// });

// app.listen(3000);
// app.listen(8778);
// var app = require('express')();
// var server = require('http').Server(app);
// // var io = require('socket.io')(server);
//
// // WARNING: app.listen(80) will NOT work here!
//
// app.get('/', function (req, res) {
//   res.end("ok")
// });


// var app = require('express-pouchdb')({
//   mode: 'minimumForPouchDB',
//   overrideMode: {
//     include: ['routes/fauxton']
//   },
//
// });


// const si = io(server)
// si.on('connection', ws => {
//   switch (ws.handshake.query.ctx) {
//     case "app":
//       dynamique.AppController.create(ws)
//       break
//     default:
//       dynamique.ClientController.create(ws)
//       // console.log("unknown context", ws.id, ws.handshake.headers['user-agent'])
//       break
//   }
// });

// const InMemPouchDB = PouchDB.defaults({db: require('memdown')});
// const db = new InMemPouchDB('xx');
// app.setPouchDB(InMemPouchDB)
// setInterval(()=>{
//   db.post({
//     title: 'Heroes'
//   }).then(function (response) {
//     // handle response
//     console.log(response.id)
//
//   }).catch(function (err) {
//     console.log(err);
//   });
// },10000)
// const PouchDB = require('pouchdb');
// var myPouch = new PouchDB('foo');
// app.use('/', app);
// app.use('/db', require('express-pouchdb')(InMemPouchDB))

const PouchDB = require('pouchdb');
const cors = require('cors')
var express = require('express');
var app = express();
var InMemPouchDB = PouchDB.defaults({db: require('memdown')});
let idb = require('express-pouchdb')(InMemPouchDB)
const db = new InMemPouchDB('xx');
app.use(cors(
  {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    // "preflightContinue": false,
    // "optionsSuccessStatus": 200
  }

))
app.use("/", idb)
app.listen(3000);

