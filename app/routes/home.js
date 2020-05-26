import Route from '@ember/routing/route';
   import { inject as service } from '@ember/service';
   import Ember from 'ember';
   import { getOwner } from '@ember/application';
import { set } from '@ember/object';


export default Route.extend({

  model() {
      return this.store.findAll('contact');
  },
  actions: {
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
