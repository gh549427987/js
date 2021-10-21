const fs=require('fs')
const path=require('path')

fs.readFile(path.join(__dirname, './files/test.txt'), 'utf-8', (err, data) => {
    if (err) throw err
    console.log('读取数据: ', data)
})
