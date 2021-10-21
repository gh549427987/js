const fs=require('fs')
const path=require('path')

// create function
function getFileByPath(path, succCb, errCb) {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) return errCb(err)
        succCb(data)
    })
}

// use function
getFileByPath(path.join(__dirname, './files/test.txt'), function (data) {
    console.log('read data success ' + data)
}, function (error) {
    console.log('read data failed ' + error.message);
})

// use 2 (回调地狱)
getFileByPath(path.join(__dirname, './files/test.txt'), function (data) {
    console.log('test ' + data)
    getFileByPath(path.join(__dirname, './files/test2.txt'), function (data) {
        console.log('test2 ' + data)
        getFileByPath(path.join(__dirname, './files/test3.txt'), function (data) {
            console.log('test3 ' + data)
        })
    })
})