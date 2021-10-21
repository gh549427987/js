const fs=require('fs')

// create function
function getFileByPath(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
}

async function getAllFile() {
    await getFileByPath('./files/test.txt').then(function (data) {
        console.log('text: '+data);
    })
    await getFileByPath('./files/test2.txt').then(function (data) {
        console.log('text2: '+data);
    })
    await getFileByPath('./files/test3.txt').then(function (data) {
        console.log('text3: '+data);
    })
}

// use function
getAllFile()