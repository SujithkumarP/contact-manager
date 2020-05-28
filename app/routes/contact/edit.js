import Route from '@ember/routing/route';
import { getOwner } from '@ember/application';
import { set } from '@ember/object';
import Ember from 'ember';


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
            },
    loading() {
              this.showGlobalLoadingIndicator(...arguments);
            }
          },

          showGlobalLoadingIndicator(transition) {
            let applicationController = getOwner(this).lookup('controller:application');

            if (!applicationController) {
              return;
            }

            set(applicationController, 'isLoading', true);

            transition.promise.finally(() => {
              set(applicationController, 'isLoading', false);
            });

            return true;
          }

});
