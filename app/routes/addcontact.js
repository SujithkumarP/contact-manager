import Route from '@ember/routing/route';
import { getOwner } from '@ember/application';
import { set } from '@ember/object';


export default Route.extend({

  model(params){
      if(Ember.isEqual(params.person_name,"null"))
      {
        return null;
      }
    // return params.person_name;
    return this.store.findRecord('contact',params.person_name);
  },
  actions:{

      loading(){

        this.showGlobalLoadingIndicator(...arguments);
      },

    didTransition(){
                  this.controllerFor('addcontact').send('setValues');
            }
},
showGlobalLoadingIndicator(transition) {
  let applicationController = getOwner(this).lookup('controller:addcontact');

  if (!applicationController) {
    alert("jf")
    return;
  }

  set(applicationController, 'currentlyLoading', true);
  transition.promise.finally(() => {
    set(applicationController, 'currentlyLoading', false);
  });

  return true;
}
});
