var PORT = 5555;
var HOST = '192.168.1.65';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    //console.log(remote.address + ':' + remote.port +' - ' + message);
    var fields = message.toString().split(',');
    if (fields.length > 13) {
      console.log(fields[0]+","+fields[14]);
    }

});

server.bind(PORT, HOST);
