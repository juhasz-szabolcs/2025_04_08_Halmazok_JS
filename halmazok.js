let betuk = new Set(['a', 'b', 'c', 'd']);

for (let elem of betuk) 
    { console.log(elem); }

betuk.add('e');

let fBetu = 'f'
betuk.add(fBetu)

for (let elem of betuk) 
    { console.log(elem); }

// has
let cBetu = 'c'
if (betuk.has(cBetu))
    { console.log(`Ez az elem (${cBetu}) a halmazban van!`); }

// delete
betuk.delete("e")
for (let elem of betuk) 
    { console.log(elem); }

// values
let iterator = betuk.values();
console.log(iterator)
for (let elem of betuk) 
    { console.log(iterator.next().value); }