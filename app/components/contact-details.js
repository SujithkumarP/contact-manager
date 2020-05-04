import Component from '@ember/component';
import { inject } from '@ember/service';
import Ember from 'ember';
import { isEqual } from '@ember/utils';

export default Component.extend({

  router: Ember.inject.service(),
store: Ember.inject.service(),
name:null,
nickname:null,
birthday:null,
email:null,
mobilenumber:null,
    init(){

      this._super(...arguments);
      let superr=this;
      this.store.findRecord('contact', this.contact).then(function(post) {

   superr.set('name',post.get('Name'));
   superr.set('nickname',post.get('Nickname'));
   superr.set('birthday',post.get('Birthday'));
   superr.set('email',post.get('email'));
   superr.set('mobilenumber',post.get('MobileNumber'));




   });



      }

});
