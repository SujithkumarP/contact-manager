import Route from '@ember/routing/route';

export default class AddcontactRoute extends Route {

  model(params){
      if(Ember.isEqual(params.person_name,"null"))
      {
        return null;
      }
    return params.person_name;
  }
}
