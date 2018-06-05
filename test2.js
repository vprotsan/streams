var fs = require('fs');

//streams captures information
var readStream = fs.createReadStream('lorem.txt');
readStream.setEncoding('utf8');
// .once or .on
counter = 0;

// .on is alias for .addListener
readStream.addListener('data', dataCounter);
readStream.addListener('data', dataPrinter);

readStream.addListener('end', function(){
  console.log(counter);
})

function dataCounter(datacoming){
  counter += 1;
  if (counter === 5){
    readStream.removeAllListeners('data');
  }
}

function dataPrinter(data){
  console.log('data chunk length: ' + data.length)
}
