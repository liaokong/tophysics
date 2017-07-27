var cluster = require('cluster');
function startWorker() {
    var worker = cluster.fork();
    console.log('CLUSTER :work %d started', worker.id);
}

if (cluster.isMaster) {
    require('os').cpus().forEach(function(){
        startWorker();
    })
    cluster.on('disconect', function(worker) {
        console.log('CLUSTER: Worker %d disconnected from the cluster.',worker.id);
    })
    cluster.on('exit', function(worker, code, signal){
        console.log('CLUSTER : Workder %d died with exit code %d (%s)', worker.id, code, signal);
        startWorker();
    })
} else {
    require('./index')();
}