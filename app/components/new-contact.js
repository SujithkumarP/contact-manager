import Component from '@ember/component';
import { inject } from '@ember/service';
import Ember from 'ember';

export default Component.extend({
  store: Ember.inject.service(),
  name:null,
  nickname:null,
  birthday:null,
  email:null,
  mobilenumber:null,
  sname:null,
  init() {
    this._super(...arguments);
    let superr=this;
    if(!Ember.isEmpty(this.get('pull')))
    {
      this.store.findRecord('contact', this.pull).then(function(post) {
     alert(post.get('Name'));

   superr.set('name',post.get('Name'));
   superr.set('nickname',post.get('Nickname'));
   superr.set('birthday',post.get('Birthday'));
   superr.set('email',post.get('email'));
   superr.set('mobilenumber',post.get('MobileNumber'));
   superr.set('sname',post.get('Name'));





   });


    }

  },



actions:{

  add:function(){

      if(Ember.isEmpty(this.get('pull')))
      {


    var newc = this.store.createRecord('contact', {
    id:this.get('name'),
     Name: this.get('name'),
     Nickname: this.get('nickname'),
     Birthday: this.get('birthday'),
     email:this.get('email'),
     MobileNumber:this.get('mobilenumber')
   });
   newc.save();

 }
 else{

   let superr=this;
   this.store.findRecord('contact', this.get('sname'), { backgroundReload: false }).then(function(post) {
     post.set('Name',superr.get('pull'));
     post.set('Nickname',superr.get('nickname'));
     post.set('Birthday',superr.get('birthday'));
     post.set('email',superr.get('email'));
     post.set('MobileNumber',superr.get('mobilenumber'));

     post.save();
});




 }
}

}
});
