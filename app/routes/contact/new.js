import Route from '@ember/routing/route';
import { set } from '@ember/object';
import { getOwner } from '@ember/application';

export default Route.extend({

  actions:{
  didTransition(){
    let contactController = getOwner(this).lookup('controller:contact');



   set(contactController,'name',null);
   set(contactController,'nickname',null);
   set(contactController,'birthday',null);
   set(contactController,'email',null);
   set(contactController,'mobilenumber',null);

  }
}

});
