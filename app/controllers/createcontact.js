import Controller from '@ember/controller';
import { inject } from '@ember/service';
import Ember from 'ember';
import { match } from '@ember/object/computed';
import EmberObject, { set } from '@ember/object';
import { isEqual } from '@ember/utils'
import { isEmpty } from '@ember/utils';

export default Controller.extend({
  router: Ember.inject.service(),
store: Ember.inject.service(),
name:null,
nickname:null,
birthday:null,
email:null,
mobilenumber:null,
idd:null,

actions:{
  setValues(val) {
    if(isEqual(val,"create")){
      this.set('name',null);
      this.set('nickname',null);
      this.set('birthday',null);
      this.set('email',null);
      this.set('mobilenumber',null);
      this.set('idd',null);
      return;

    }

      let post=this.model;

     this.set('name',post.get('Name'));
     this.set('nickname',post.get('Nickname'));
     this.set('birthday',post.get('Birthday'));
     this.set('email',post.get('email'));
     this.set('mobilenumber',post.get('MobileNumber'));
     this.set('idd',post.get('id'));
},
add(){


  let User = EmberObject.extend({
    hasValidEmail: match('email', /^.+@.+\..+$/),
  });

  let user = User.create();
  set(user, 'email',this.get('email'));

  if(this.idd){
    if(user.hasValidEmail || isEmpty(this.get('email'))){
    if(isEqual(this.model.Name,this.get('name')) && isEqual(this.model.Nickname,this.get('nickname')) && isEqual(this.model.Birthday,this.get('birthday')) && isEqual(this.model.email,this.get('email')) && isEqual(this.model.MobileNumber,this.get('mobilenumber')))
    {
      alert("No change in the fields");
      return;
    }

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


 this.get('router').transitionTo('home');
    return;
  }
  else{
    alert("You have entered an invalid email address!");
    return false;

  }
}


    else if(user.hasValidEmail || isEmpty(this.get('email'))){

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

 this.get('router').transitionTo('home');


}
else
{
alert("You have entered an invalid email address!");
return false;
}
}
}
});
