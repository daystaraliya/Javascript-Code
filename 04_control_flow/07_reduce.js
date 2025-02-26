const no = [1,2,3]

// const newNo = no.reduce(function (accumulator , currentVal) {
//     console.log(`acc: ${accumulator} and current: ${currentVal} `);
    
//     return accumulator + currentVal
// }, 3 )

//console.log(newNo);

const totalNo = no.reduce( ( acc, curr ) => acc+ curr ,0)
console.log(totalNo);
