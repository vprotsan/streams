var fs = require('fs');

//streams captures information
var readStream = fs.createReadStream('lorem.txt');
readStream.setEncoding('utf8');
// .once or .on
readStream.once('data', function(datacoming){
  counter += 1;
  if (counter === 5){
    readStream.pause();
  }
  // console.log(datacoming);
})

readStream.on('end', function(){
  console.log(counter);
})

var writeStream = fs.createReadStream('copyl.txt');
// writeStream.write('Hey');

//pipe
readStream.pipe(writeStream);
