// import data from '../../data/clothes.json' assert {type: "json"}

// const myObj = JSON.parse(data);
// x = myObj.coats;
// console.log(x[0]);
const sort = require('./Sort.js');

const fs = require('fs')
fs.readFile('../../data/clothes.json', 'utf8', (err, jsonString) => {
    if (err) {
        return;
    }
    try {
        const clothes = JSON.parse(jsonString);
        tagged = clothes.coats.d.tags;
        console.log(tagged);
        console.log("Avg value for tags that match 'clean': " + sort.respond("clean", tagged));
} catch(err) {
        console.log('Error parsing JSON string:', err);
    }
})
