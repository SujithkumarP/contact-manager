import Route from '@ember/routing/route';
import { isEqual } from '@ember/utils'



export default Route.extend({
  // templateName:'createcontact',
  model(params){
      if(isEqual(params.person_name,"null"))
      {
        return null;
      }
    // return params.person_name;
    return this.store.findRecord('contact',params.person_name);
  },
  renderTemplate(controller,model){
    this.render('createcontact',{
      controller:'createcontact',
      model:model
    })
  },
  actions:{
    didTransition(){
        let createController=this.controllerFor('createcontact');
        createController.send('setValues',null);

       }
  }
});
