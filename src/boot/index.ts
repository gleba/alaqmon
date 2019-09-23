// import io from 'socket.io-client';
// const socket = io('http://localhost:8778');
//
// socket.on('sessions',v=>{
//   console.log('sessions', v)
// })
//
//
//


import PouchDB from 'pouchdb';

// const p = require('pouchdb')
// console.log(p)
// console.log("???")

// const db = new PouchDB('http://localhost:8778');


const db = new PouchDB('http://localhost:3000/xx',{
  ajax:{
    withCredentials:false
  }
});

console.log(db)

fetch('http://localhost:3000/xx').then(x=>{
  // console.log({x})
  x.json().then(v=>{
    console.log(v)
    db.info().then(function (info) {
      console.log("i",info);
    }).catch(e=>{
      console.log({e})
    })

  })

})

//
//

// db.allDocs().then(x=>{
//   console.log("x",x)
// }).catch(e=>{
//   console.log({e})
// }).finally(()=>{
//   console.log("f")
// })
// console.log("?")


// var changes = db.changes({
//   since: 'now',
//   live: true,
//   include_docs: true
// }).on('change', function(change) {
//   // handle change
//   console.log("handle change", change)
//
// }).on('complete', function(info) {
//   console.log("handle complete", info)
// }).on('error', function (err) {
//   console.log(err);
// });
