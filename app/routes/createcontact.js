import Route from '@ember/routing/route';

export default Route.extend({
  actions:{
    loading(transition){

       let createController=this.controllerFor('createcontact');
       transition.promise.finally(function(){
         createController.send('setValues');


       });


    },didTransition(){
      let createController=this.controllerFor('createcontact');
      createController.send('setValues',"create");


    }
  }
});
