"use strict";module.exports={getUser:function(e,o){return o.send(e.params.username)},userHome:function(e,o){o.render("index.pug",{title:"Facebook Clone",home:"home",greeting:"Hello World",profile:"profile",notification:"notification",search:"search",index:"index"})},home:function(e,o){o.render("home.pug",{title:"Facebook Clone",home:"home",greeting:"Hello World",profile:"profile",notification:"notification",search:"search",index:"index"})},login:function(e,o){o.render("login.pug",{title:"Facebook Clone",home:"home",greeting:"Hello World",profile:"profile",notification:"notification",search:"search",index:"index"})}};