var questions=[
    "Whats your name ?",
    "Whats your fav hobby ?",
    "Whtas your preferred programming language ?"
]

var answers =[];

function InpuAndOutPut(i){
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(" > ");
}

process.stdin.on('data',function(data){

    answers.push(data.toString().trim());

    if(answers.length < questions.length){
        InpuAndOutPut(answers.length);
    }else{
        process.exit();
    }
});

process.on('exit',function(){

    process.stdout.write("\n");
        process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finishing writing ${answers[2]}`);
    process.stdout.write("\n");
});

InpuAndOutPut(0);