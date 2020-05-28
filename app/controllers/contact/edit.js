import Controller from '@ember/controller';
import { set } from '@ember/object';
import { getOwner } from '@ember/application';
import { get } from '@ember/object';
import Ember from 'ember';
import { isEqual } from '@ember/utils'




export default Controller.extend({
  router: Ember.inject.service(),

  actions:{
    setValues() {
      let post=this.model;
      let contactController = getOwner(this).lookup('controller:contact');

      if (!contactController) {
        return;
      }

     set(contactController,'name',post.get('Name'));
     set(contactController,'nickname',post.get('Nickname'));
     set(contactController,'birthday',post.get('Birthday'));
     set(contactController,'email',post.get('email'));
     set(contactController,'mobilenumber',post.get('MobileNumber'));








    },
    add(){


      let thiss=this;
      let contactController = getOwner(this).lookup('controller:contact');
      let id=this.model.id;
      if(isEqual(this.model.Name,get(contactController,'name')) && isEqual(this.model.Nickname,get(contactController,'nickname')) && isEqual(this.model.Birthday,get(contactController,'birthday')) && isEqual(this.model.email,get(contactController,'email')) && isEqual(this.model.MobileNumber,get(contactController,'mobilenumber')))
      {
        alert("No change in the fields");
        return;
      }



      this.store.findRecord('contact', this.model.id, { backgroundReload: false }).then(function(post) {
        post.set('Name',get(contactController,'name'));
        post.set('Nickname',get(contactController,'nickname'));
        post.set('Birthday',get(contactController,'birthday'));
        post.set('email',get(contactController,'email'));
        post.set('MobileNumber',get(contactController,'mobilenumber'));

        post.save();
        alert("Contact Updated Successfully");

   });

   this.get('router').transitionTo('details',id);


 }
    }

});
