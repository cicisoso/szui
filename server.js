var spawn = require('child_process').spawn,
    nico = null,
    combo = null;


function startNico(){
    console.log('start nico');
    nico = spawn('./nico.sh');

    console.log('nico js pid is '+nico.pid);
    nico.on('close',function(code,signal){
        nico.kill(signal);
        nico = startServer();
    });
    nico.on('error',function(code,signal){
        nico.kill(signal);
        nico = startServer();
    });
    return nico;
};

function startCombo(){
    console.log('start combo');
    combo = spawn('node', ['combo.js']);

    console.log('combo js pid is '+combo.pid);
    combo.on('close',function(code,signal){
        combo.kill(signal);
        combo = startServer();
    });
    combo.on('error',function(code,signal){
        combo.kill(signal);
        combo = startServer();
    });
    return combo;
};
startCombo();
startNico();