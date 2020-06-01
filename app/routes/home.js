import Route from '@ember/routing/route';




export default Route.extend({

  model() {
      return this.store.findAll('contact');
  },
  actions:{
    didTransition(){
      let homeController=this.controllerFor('home');
      homeController.set('showContent',null);

    }
  }
 });
