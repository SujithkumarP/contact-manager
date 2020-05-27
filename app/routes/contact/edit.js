import Route from '@ember/routing/route';

export default Route.extend({

  model(params){
      if(Ember.isEqual(params.contact_id,"null"))
      {
        return null;
      }
    // return params.person_name;
    return this.store.findRecord('contact',params.contact_id);
  },
  actions:{
    didTransition(){
                  this.controllerFor('contact.edit').send('setValues');
            }
  }
});
