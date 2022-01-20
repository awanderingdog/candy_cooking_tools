
const ADDRESSES_FILE_NAME = './5q7yGMk6XEJ9e7AciT4vhVwwAMuynYrKpyqRGowy91U6_holders.json';
const addresses = require(ADDRESSES_FILE_NAME);

// console.log(addresses);

function summarize_repeated(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        const addr = arr[i].owner_wallet;

        if (obj[addr]) {
            obj[addr] += 1;
        } else {
            obj[addr] = 1;
        }
    }

    var result = Object.keys(obj).map((key) => [key, obj[key]]);
    result.sort(function(a,b) {
        return b[1] - a[1];
    });

    return result; 
}

console.log('Total: ' + addresses.length);
console.log('Owners:');

const summarized = summarize_repeated(addresses);

summarized.map(function(val) {
    console.log(val[0] + ': ' + val[1]);
});
