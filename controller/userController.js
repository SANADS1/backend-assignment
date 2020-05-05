module.exports = {
  getUser(req, res) {
      return res.send(req.params.username);
  },
  userHome(req, res){
    res.render(
      'index.pug', 
      { title: 'Facebook Clone',
        home:'home',
        greeting: 'Hello World',
        profile: 'profile',
        notification: 'notification',
        search: 'search',
        index: 'index'
     });
  },
  home(req, res){
    res.render(
      'home.pug',
      { title: 'Facebook Clone',
        home:'home',
        greeting: 'Hello World',
        profile: 'profile',
        notification: 'notification',
        search: 'search',
        index: 'index'
     }

    );
  
  },
  login(req, res){
    res.render(
      'login.pug',
      { title: 'Facebook Clone',
        home:'home',
        greeting: 'Hello World',
        profile: 'profile',
        notification: 'notification',
        search: 'search',
        index: 'index'
     }
     
    );
  
  },
  createUser(req, res){
    const { username, email, phone, password} = req.body;
    console.log(username,email, password, phone);
  }
}