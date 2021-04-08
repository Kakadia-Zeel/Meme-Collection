var sqlite3 = require('sqlite3').verbose()

// open the database
let db = new sqlite3.Database('meme.db', (err) => {
    if (err) {
      console.error(err.message);
      throw err
    }
    console.log('Connected to the meme database.');
  });


// create table 'student'
const sql='CREATE TABLE memes(id INTEGER PRIMARY KEY AUTOINCREMENT,name text, caption text, url text)';

db.run(sql, (err) => {
  if (err) {
      // Table already created
      console.log("Already table meme exist");
  }else{
    console.log('Table created.');
    //First time Table created, insert some rows
    // console.log('First time Table created, creating some rows.');
    // var insert = 'INSERT INTO memes (name,caption,url) VALUES(?,?,?)';

    // db.run(insert,["Zeel","First Meme","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/friends4-1518453290.jpg?crop=1xw:1xh;center,top&resize=480:*"], function(err) {
    // if (err) {
    //   return console.log(err.message);
    // }
    // get the last insert id
    //console.log(`A row has been inserted with rowid ${this.lastID}`);
  }
  
  });

    

// });

// const get='SELECT * FROM memes';
// db.all(get,(err,rows)=>{
//     if (err) {
//        throw err;
//     }
//     rows.forEach((row)=>{
//         console.log(row);
//     });
// });

// const de='DROP TABLE memes';

// db.run(de, (err) => {
//   if (err) {
//       // Table already created
//       console.log(err);
//   }else{
//     console.log('Table Deleted.');
//   }

// });



// export as module, called db
module.exports = db;