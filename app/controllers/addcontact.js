import Controller from '@ember/controller';
import { inject } from '@ember/service';
import Ember from 'ember';
import { isEqual } from '@ember/utils'


export default Controller.extend({
  router: Ember.inject.service(),
store: Ember.inject.service(),
name:null,
nickname:null,
birthday:null,
email:null,
mobilenumber:null,
sname:null,
actions:{
  setValues() {
    let post=this.model;

   this.set('name',post.get('Name'));
   this.set('nickname',post.get('Nickname'));
   this.set('birthday',post.get('Birthday'));
   this.set('email',post.get('email'));
   this.set('mobilenumber',post.get('MobileNumber'));
   this.set('sname',post.get('MobileNumber'));








  },
  add(){


    let thiss=this;


    this.store.findRecord('contact', this.model.id, { backgroundReload: false }).then(function(post) {
      post.set('Name',thiss.get('name'));
      post.set('Nickname',thiss.get('nickname'));
      post.set('Birthday',thiss.get('birthday'));
      post.set('email',thiss.get('email'));
      post.set('MobileNumber',thiss.get('mobilenumber'));

      post.save();
      alert("Contact Updated Successfully");

 });

 this.get('router').transitionTo('details',this.model.id);


  }
  }

});
