import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about');
  this.route('home', function() {
    this.route('details',{path:'details/:contact_id'});
  });
  this.route('addcontact',{path:'addcontact/:person_name'});
  this.route('createcontact');

  this.route('application-loading');
  this.route('home-loading');
  this.route('addcontact-loading');
});
