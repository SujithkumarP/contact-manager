import Controller from '@ember/controller';
import { set } from '@ember/object';
import { getOwner } from '@ember/application';
import { get } from '@ember/object';


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
     set(contactController,'sname',post.get('MobileNumber'));








    },
    add(){


      let thiss=this;
      let contactController = getOwner(this).lookup('controller:contact');
      let id=this.model.id;


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
