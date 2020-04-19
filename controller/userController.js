module.exports = {
  getUser(req, res) {
      return res.send(req.params.username);
  },
  userHome(req, res){
    res.render('index.pug', { greeting: 'Hello World' });
  }
}