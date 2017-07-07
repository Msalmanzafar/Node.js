var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var realPerson = {
    // mes: '',
    name: '',
    sayings: []
};

rl.question("What is the name of real person ? ", function (ans) {
    // realPerson.mes = ans;
    // if (realPerson.mes.toLowerCase().trim() === 'bad') {
    //     rl.setPrompt(`Why you said ${realPerson.mes}? something happen!`);
    //     rl.prompt();
    // }else {
    //     rl.setPrompt(`Stay bless. \n Can i help you ?`);
    //     rl.prompt();
    // }
    realPerson.name = ans;
    rl.setPrompt(`What would ${realPerson.name} say? `);
    rl.prompt();
    rl.on('line', function(saying){

        realPerson.sayings.push(saying.trim());

        if(saying.toLowerCase().trim() === 'exit'){
            rl.close();
        }else{
            rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave)  `);
            rl.prompt();
        }
    });
});

rl.on('close' , function(){
    console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
    process.exit();
});