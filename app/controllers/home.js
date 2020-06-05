import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { isEqual } from '@ember/utils'
import { isEmpty } from '@ember/utils';
import Ember from 'ember';




export default Controller.extend({
  router: Ember.inject.service(),
isShow:null,
showContent:false,
name:null,
nickname:null,
birthday:null,
email:null,
mobileNumber:null,
contactId:null,
init(){
  this._super(...arguments);
  // this.set('showContent',false);
  // this.set('isShow',null);

},
actions:{

      showDetails(person){
        if(isEqual(this.contactId,person.id)){
            this.contactId=null;
            this.get('router').transitionTo('home');
            return;
        }

        this.contactId=person.id;
        this.get('router').transitionTo('home.details',person.id);
      }

  
}
});
