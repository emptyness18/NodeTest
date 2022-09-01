const os = require('os')

console.log("Memoria inicial: " + os.freemem())

var v = [];

for (i = 0; i < 100; i++){
    v[i] = new Array(10000);
    for (j = 0; j < v[i].length; j++){
        v[i][j] = j;
    }
    console.log("Memoria actual: " + os.freemem())
}

console.log("Memoria final: " + os.freemem())