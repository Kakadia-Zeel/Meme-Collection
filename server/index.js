var express = require("express")
var cors = require('cors');
var bodyParser = require("body-parser");
var db = require("./database.js")

var app = express()
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Server port
var HTTP_PORT = 8081 || process.env.PORT;



// Root endpoint
// app.get("/", (req, res, next) => {
//    res.json({"message":"Ok"})
// });



// GET all memes
app.get("/memes", (req, res, next) => {
    let sql = "SELECT * FROM memes";
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

//GET by id
app.get("/memes/:id", (req, res, next) => {
    var sql = "SELECT * FROM memes WHERE id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(404).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
});




// POST a new meme
app.post("/memes", (req, res, next) => {

         const name = req.body.name;
         const caption = req.body.caption;
         const url = req.body.url;
    
    var sql ="INSERT INTO memes (name,caption,url) VALUES(?,?,?)";
    var params =[name,caption,url]
    db.run(sql, params, function (errors, result) {
        if (errors){
            res.status(400).json({"error": errors.message})
            return;
        }
        res.json({
            "message": "success",
            
        })
    });
});

//Update Meme
app.patch("/memes/:id", (req, res, next) => {
    var data = {
        name: req.body.name,
        caption: req.body.caption,
        url : req.body.url
    }
    db.run(
        `UPDATE memes SET 
           name = COALESCE(?,name), 
           caption = COALESCE(?,caption), 
           url = COALESCE(?,url) 
           WHERE id = ?`,
        [data.name, data.caption, data.url, req.params.id],
        function (err, result) {
            if (err){
                res.status(404).json({"error": res.message})
                console.log(err)
                return;
            }
            res.json({
                message: "success",
                data: data,
                changes: this.changes
            })
    });
})



//Delete Meme
app.delete("/memes/:id", (req, res, next) => {
    
    db.run(
        'DELETE FROM memes WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
  })

// Default response for any other request
app.use(function(req, res){
    res.status(404).send({
        status:404,
        error: 'Not Found'
    })
});

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
