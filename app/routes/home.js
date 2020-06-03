import Route from '@ember/routing/route';
import { isEqual } from '@ember/utils'




export default Route.extend({
  transitionRoute:null,
  model() {
      return this.store.findAll('contact');
  },
  actions:{

    didTransition(){


      // let homeController=this.controllerFor('home');
      // homeController.set('showContent',null);

    }
  }
 });
