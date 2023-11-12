const {readFile, writeFile} = require('fs').promises


const start = async() => {
    try {
    const first = await readFile("./content/first.txt", 'utf8')
    const second = await readFile("./content/second.txt", 'utf8')
    await writeFile("./content/result.txt",`THIS IS FUCKING AWESOME?? : ${first} ${second}`, {flag: 'a'})
    console.log(first,second)
    } catch (err) {
        console.log(err)
    }
}

start()
//const getText = (path) => {
//    return new Promise((resolve, reject) => {
// //       readFile(path, "utf8", (err, data) => {
//            if (err){
//                reject(err)
//            } else{
//                resolve(data)
//            }
//        })
//    })
//}
// getText("./content/first.txt")
// .then(data => console.log(data))
// .catch(err => console.log(err))
// const utils = require('util')
// const readFilePromise = utils.promisify(readFile)
// const writeFilePromise = utils.promisify(writeFile)