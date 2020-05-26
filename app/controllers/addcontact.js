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
    let superr=this;

      this.store.findRecord('contact', this.model).then(function(post) {

   superr.set('name',post.get('Name'));
   superr.set('nickname',post.get('Nickname'));
   superr.set('birthday',post.get('Birthday'));
   superr.set('email',post.get('email'));
   superr.set('mobilenumber',post.get('MobileNumber'));
   superr.set('sname',post.get('MobileNumber'));





   });



  },
  add(){
    let superr=this;





    this.store.findRecord('contact', this.model, { backgroundReload: false }).then(function(post) {
      post.set('Name',superr.get('name'));
      post.set('Nickname',superr.get('nickname'));
      post.set('Birthday',superr.get('birthday'));
      post.set('email',superr.get('email'));
      post.set('MobileNumber',superr.get('mobilenumber'));

      post.save();
      alert("Contact Updated Successfully");

 });

 this.get('router').transitionTo('details',this.model);


  }
  }

});
