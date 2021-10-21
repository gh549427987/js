const fs=require('fs')
const { getPackedSettings } = require('http2')
const path=require('path')

// create function
function getFileByPath(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
}

// use function
getFileByPath('./files/test.txt')
.then(function (data) {
    console.log('text.txt: ' + data);
    return getFileByPath('./files/test1.txt')
}, function (err) {
    console.log('读取失败： '+ err.message);
    return getFileByPath('./files/test2.txt')
})
.then(function (data) {
    console.log('text2.txt: ' + data);
    return getFileByPath('./files/test2.txt')
}, function (err) {
    console.log('读取失败： '+ err.message);
    return getFileByPath('./files/test3.txt')
})
.then(function (data) {
    console.log('text3.txt: ' + data);
})
.then(function (data) {
    console.log(data);
})

//
console.log('======================================');
getFileByPath('./files/test.txt')
.then(function (data) {
    console.log('text.txt: ' + data);
    return getFileByPath('./files/test1.txt')
})
.then(function (data) {
    console.log('text2.txt: ' + data);
    return getFileByPath('./files/test2.txt')
})
.then(function (data) {
    console.log('text3.txt: ' + data);
})
.catch(function (err) {
    console.log("catch a error: " + err);
})