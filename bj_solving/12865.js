const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split('\n');
//let n_need = input[0][0], k_max = input[0][1];
let vwp = [];
for (let i = 0; i < input.length; i++) {
    const sliced = input[i].split(' ');
    vwp[i] = sliced[1] / sliced[0];
}
console.log(vwp);
