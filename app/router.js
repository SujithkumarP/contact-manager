import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about');
  this.route('home');
  this.route('addcontact',{path:'addcontact/:person_name'});
  this.route('createcontact');
  this.route('details',{path:'details/:mobile_number'});

  this.route('contact', function() {
    this.route('new');
    this.route('edit',{path:'edit/:contact_id'});
  });
});
