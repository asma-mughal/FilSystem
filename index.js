const fs = require('fs')
fs.writeFile('bio.txt', "I exsist", (err) => {
    if (err)
    {
console.log(err)
    }
    else {
        console.log("Created Successfully")
    }
})
fs.appendFile('bio.txt', "Adding more data", (err) => {
    if (err)
    {
        console.log(err)
    }
    else {
        console.log("Appended Succesfully")
    }
})
fs.readFile('bio.txt', "UTF-8", (err, data) => {
    if (err)
    {
        console.log(err)
    }
    else {
        console.log(data)
    }
})
fs.rename('bio.txt', "newbio.txt", (err) => {
    if (err)
    {
        console.log(err)
    }
    else {
        console.log("Rename succesfully")
    }
})