'use strict';
var installed = true;
module.exports = function(app) {


  if (!installed) {
var User = app.models.User;
var Role = app.models.Role;
 var RoleMapping = app.models.RoleMapping;

User.create([
    {username: 'diptamh', email: 'halderdiptam@gmail.com', password: 'admin'},
  ], function(err, users) {
    if (err) throw err;


     console.log('Created users:', users);
    //create the admin role
    Role.create({
      name: 'administrator'
    }, function(err, role) {
      if (err) throw err;

      //make bob an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[0].id
      }, function(err, principal) {
             console.log('Created principal:', principal);
      });
    });
  });


  }

};







