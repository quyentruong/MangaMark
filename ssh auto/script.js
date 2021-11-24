let Client = require('ssh2-sftp-client');
let sftp = new Client();

const config = {
  host: '',
  port: '',
  username: '',
  password: ''
};

sftp.connect(config)
.then(() => {
	console.log('success');
  return sftp.list('/var/www');
}).then(data => {
  console.log(data, 'the data info');
  
  
}).then(() => {
	return sftp.exists('/var/www/manga_animes')
}).then((data) => {
	console.log(data)
	return sftp.end();
})
.catch(err => {
  console.log(err, 'catch error');
});
