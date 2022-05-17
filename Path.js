const fs = require('fs')
const path = require('path')
const dir = './Path'
fs.mkdirSync(dir);
const dirPath= path.join(__dirname,'Path')
for(i=0;i<=5;i++)
{
    fs.writeFileSync(dirPath+'/Apple'+i+'.txt','cgcxczc')
}

console.log(dirPath)
