var waitTime = 3000;
var currentTime = 0;
var waitInterval = 10;
var percentWaited = 0;

function writeWaitingPercent(p){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
}

var interval = setInterval(function(){
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime/waitTime) * 100);
    writeWaitingPercent(percentWaited)
},waitInterval);

setTimeout(function(){
    clearInterval(interval);
    writeWaitingPercent(100);
    console.log("\n")
    console.log("**************")
    console.log("\n done \n");
    console.log("**************")
    
},waitTime);

writeWaitingPercent(percentWaited);