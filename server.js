const server = require('./app');
const port = 5500;



server.listen(port, () => {
  console.log(`Server started on ${port}`);
});