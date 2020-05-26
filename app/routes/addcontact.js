import Route from '@ember/routing/route';

export default Route.extend({

  model(params){
      if(Ember.isEqual(params.person_name,"null"))
      {
        return null;
      }
    return params.person_name;
  },
  actions:{

    didTransition(){
            this.controllerFor('addcontact').send('setValues');
            }
}
});
