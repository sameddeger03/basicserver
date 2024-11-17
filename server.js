const fs = require("fs");
const express = require('express');
const net = require('net');
const app = express();
const port = 80;

//public klasör kontrolü
let directoryPath= "public";
if (!fs.existsSync(directoryPath)) {
	try{
		fs.mkdirSync(directoryPath);
		console.log(`Klasör '${directoryPath}' oluşturuldu.`);
	} catch {
		console.log(`Klasör '${directoryPath}' oluşturulamıyor.`);
		process.exit(1);
	}
}

// Portun kullanımda olup olmadığını kontrol eden fonksiyon
function checkPortInUse(port, callback) {
  const server = net.createServer((socket) => {
    socket.write('echo\r\n');
    socket.pipe(socket);
  });

  server.listen(port, '127.0.0.1');
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      callback(true);
    } else {
      callback(false);
    }
  });

  server.on('listening', () => {
    server.close();
    callback(false);
  });
}

// Portun kullanımda olup olmadığını kontrol et ve sonuca göre davran
checkPortInUse(port, (inUse) => {
  if (inUse) {
    console.error(`Port ${port} kullanımda.`);
    process.exit(1);
  } else {
	app.use(express.static(directoryPath));
    app.get('/', (req, res) => {
      res.send('Merhaba! Bu basit bir Express sunucusudur. Public klasörüne attığınız dosyalara bu adresten ulaşabilirsiniz.');
    });

    app.listen(port, () => {
      console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
    });
  }
});
