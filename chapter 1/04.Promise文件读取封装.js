const fs=require('fs')
const path=require('path')


// create function
function getFileByPath(path, succCb, errCb) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
}