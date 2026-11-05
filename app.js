import http from 'http';
const hostname = process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com';
const port = 3000;
const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('When i find myself in time of trouble, mother mary come to me!\n');
};
const server = http.createServer(requestHandler);
server.listen(port, hostname, () => {
  console.log(`Server berjalan pada http://${hostname}:${port}/`);
});

const memoryInformation = process.memoryUsage();
 
console.log(memoryInformation);

const firstName = process.argv[2];
const lastName = process.argv[3];
 
console.log(`Hello ${firstName} ${lastName}`);