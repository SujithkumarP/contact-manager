import Controller from '@ember/controller';
import { inject } from '@ember/service';
import Ember from 'ember';
import { match } from '@ember/object/computed';
import EmberObject, { set } from '@ember/object';

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
add(){


  let User = EmberObject.extend({
    hasValidEmail: match('email', /^.+@.+\..+$/),
  });

  let user = User.create();
  set(user, 'email',this.get('email'));

    if(user.hasValidEmail){


      var cid=Math.floor(Math.random() * 1000).toString()+Date.now()+Math.random().toString(36).slice(2);



  var newc = this.store.createRecord('contact', {
  id:cid,
   Name: this.get('name'),
   Nickname: this.get('nickname'),
   Birthday: this.get('birthday'),
   email:this.get('email'),
   MobileNumber:this.get('mobilenumber')
 });
 newc.save();
 alert("Contact Has Been Added Successfully");

 this.get('router').transitionTo('details',newc.get('id'));


}
else
{
alert("You have entered an invalid email address!");
return false;
}
}
}
});
