// var fs = require("fs");

// // var content = fs.readFileSync("./lib/text.md","UTF-8");
// var content = fs.readFileSync("./lib/text.md");

// console.log(content);

////////////////////////////////////////////////////////////////////////////////////////////


// var fs = require("fs");

// fs.readFile("./lib/text.md","UTF-8",function(err,succ){
//     if(err){
//         console.log(err);
//     }
//     console.log(succ);

// })


////////////////////////////////////////////////////////////////////////////////////////////////

var fs = require("fs");
var path = require("path");

fs.readdir('./lib',function(err,files){
    files.forEach(function(fileName) {

        var file = path.join( __dirname , 'lib', fileName )
        
        var stats =  fs.statSync(file);
        
        if(stats.isFile() && fileName !== 'DS_Store'){
            fs.readFile(file, 'UTF-8', function(err, succ){
                console.log(succ);
            })    
        }
    }, this);
})