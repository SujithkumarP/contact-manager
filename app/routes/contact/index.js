import Route from '@ember/routing/route';

export default class ContactIndexRoute extends Route {
  redirect() {
    this.transitionTo('home');
  }

}
