import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
isShow:null,
showContent:false,
init(){
  this._super(...arguments);
  this.set('showContent',false);
  this.set('isShow',null);

},
actions:{
  showDetails(id){
    this.toggleProperty('showContent');
    this.set('isShow',id);
  },
  hide(v){
    if(v){
      this.set('showContent',false);

    }else{
    this.set('showContent',true);
    }
  }
}
});
