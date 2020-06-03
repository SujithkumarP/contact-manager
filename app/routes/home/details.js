import Route from '@ember/routing/route';

export default class HomeDetailsRoute extends Route {
  model(params){
      if(Ember.isEqual(params.contact_id,"null"))
      {
        return null;
      }
    // return params.person_name;
    return this.store.findRecord('contact',params.contact_id);
  }
}
