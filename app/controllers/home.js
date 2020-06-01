import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { isEqual } from '@ember/utils'
import { isEmpty } from '@ember/utils';



export default Controller.extend({
isShow:null,
showContent:false,
init(){
  this._super(...arguments);
  this.set('showContent',false);
  this.set('isShow',null);

},
actions:{
  showDetails(person){
    if(isEqual(person.id,this.isShow) || isEmpty(this.isShow))
    {
      this.toggleProperty('showContent');


    }else if(!isEqual(person.id,this.isShow) && !this.showContent){
      this.toggleProperty('showContent');

    }
    this.set('isShow',person.id);
    this.set('id',person.id);
    this.set('name',person.Name);
    this.set('nickname',person.Nickname);
    this.set('birthday',person.Birthday);
    this.set('email',person.email);
    this.set('mobileNumber',person.MobileNumber);



  },
  // hide(v){
  //   if(v){
  //     this.set('showContent',false);
  //
  //   }else{
  //   this.set('showContent',true);
  //   }
  // }
}
});
