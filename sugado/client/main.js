import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Router.route('/', {
  name: 'navigation',
  template: 'navigation'
});


Router.route('/register', {
  name: 'register',
  template: 'register'
});

Router.route('/login', function () {
  this.render('login');
});  

Template.register.events({
  'submit form': function(event){
    event.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    Router.go('home');
  Accounts.createUser({
            email: email,
            password: password
        });
  }
});

Template.navigation.events({
  'click .logout': function(event){
    <ul>
    <li><a href="{{pathFor route='home'}}">Home</a></li>
    <li><a href="#" class="logout">Logout</a></li>
    <li><a href="{{pathFor route='register'}}">Register</a></li>
    <li><a href="{{pathFor route='login'}}">Login</a></li>
    </ul>
      event.preventDefault();
      Meteor.logout();
  }
});
Template.login.events({
  'submit form': function(event){
      event.preventDefault();
      var email = $('[name=email]').val();
      var password = $('[name=password]').val();
      Meteor.loginWithPassword(email, password);
  }
});


