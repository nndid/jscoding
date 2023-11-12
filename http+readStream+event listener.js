http = require('http');
fs = require('fs');

const server = http.createServer(function (req, res) {
    const fileReadStream = fs.createReadStream('./content/bigfile.txt',{
        watermark: 9000,
        encoding: 'utf8'
    })
    fileReadStream.on('open', () =>{
        fileReadStream.pipe(res)
    })
    fileReadStream.on('error', (err)=>{
        res.end(err)
    })
});
server.listen(5000);