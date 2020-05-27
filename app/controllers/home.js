import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
isShow:null,
showContent:false,
init(){
  this._super(...arguments);
  this.showContent=false;

},
actions:{
  showDetails(id){
    this.toggleProperty('showContent');
    this.set('isShow',id);
  }
}
});
