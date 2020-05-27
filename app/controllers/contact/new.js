import Controller from '@ember/controller';
import { get } from '@ember/object';
import { getOwner } from '@ember/application';
import { inject } from '@ember/service';
import Ember from 'ember';
import { match } from '@ember/object/computed';
import EmberObject, { set } from '@ember/object';
import { isEmpty } from '@ember/utils';




export default Controller.extend({
  router: Ember.inject.service(),



  actions:{
  
    add(){
      // alert("efkm")

    let contactController = getOwner(this).lookup('controller:contact');

    if (!contactController) {
      return;
    }

    // let name=get(contactController,'name');
    // let nickname=get(contactController,'nickname');
    // let birthday=get(contactController,'birthday');
    // let email=get(contactController,'email');
    // let mobilenumber=get(contactController,'mobilenumber');
    let User = EmberObject.extend({
      hasValidEmail: match('email', /^.+@.+\..+$/),
    });

    let user = User.create();
    set(user, 'email',get(contactController,'email'));
    if(isEmpty(get(contactController,'email'))){
      user.hasValidEmail=true;

    }

      if(user.hasValidEmail){

    var cid=Math.floor(Math.random() * 1000).toString()+Date.now()+Math.random().toString(36).slice(2);



var newc = this.store.createRecord('contact', {
id:cid,
 Name:get(contactController,'name') ,
 Nickname:get(contactController,'nickname'),
 Birthday:get(contactController,'birthday'),
 email:get(contactController,'email'),
 MobileNumber:get(contactController,'mobilenumber')
});
newc.save();
alert("Contact Has Been Added Successfully");

this.get('router').transitionTo('details',newc.get('id'));

}
else{
  alert("You have entered an invalid email address!");
  return false;
}
    }
  }
});
