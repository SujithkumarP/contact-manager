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
   superr.set('sname',post.get('MobileNumber'));





   });


    }

  },



actions:{

  add:function(){

      if(Ember.isEmpty(this.get('pull')))
      {


    var newc = this.store.createRecord('contact', {
    id:this.get('mobilenumber'),
     Name: this.get('name'),
     Nickname: this.get('nickname'),
     Birthday: this.get('birthday'),
     email:this.get('email'),
     MobileNumber:this.get('mobilenumber')
   });
   newc.save();
   alert("Contact Added Successfully");


 }
 else{

   let superr=this;
   if(isEqual(this.get('pull'),this.get('sname')))
   {




   this.store.findRecord('contact', this.get('sname'), { backgroundReload: false }).then(function(post) {
     post.set('Name',superr.get('name'));
     post.set('Nickname',superr.get('nickname'));
     post.set('Birthday',superr.get('birthday'));
     post.set('email',superr.get('email'));
     post.set('MobileNumber',superr.get('pull'));

     post.save();
     alert("Contact Updated Successfully");

});

}
else{
  var newc = this.store.createRecord('contact', {
  id:this.get('pull'),
   Name: this.get('name'),
   Nickname: this.get('nickname'),
   Birthday: this.get('birthday'),
   email:this.get('email'),
   MobileNumber:this.get('pull')
  });
  newc.save();
  alert("Contact Updated Successfully");
  this.store.findRecord('contact', this.get('sname'), { backgroundReload: false }).then(function(post) {

    post.deleteRecord();
post.get('isDeleted'); // => true
post.save();

    });




}



 }

 this.get('router').transitionTo('home');

}

}
});
