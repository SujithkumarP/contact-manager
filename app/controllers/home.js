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
  hide(){
    this.set('showContent',true);

  }
}
});
