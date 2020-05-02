module.exports = {
  getUser(req, res) {
      return res.send(req.params.username);
  },
  userHome(req, res){
    res.render('index.pug', { title: 'Welcome User', greeting: 'Hello World' });
  },
  createUser(req, res) {
    const { name, email, phone, password } = req.body;
      res.redirect('/');
  },
  getSignIn(req, res) {
    res.render('signIn.pug');
  },
  getHome(req, res) {
    res.render('home.pug');
  },
  getProfile(req, res) {
    res.render('profile.pug');
  }
}