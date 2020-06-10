import Route from '@ember/routing/route';
import { isEqual } from '@ember/utils'


export default class HomeDetailsRoute extends Route {
  model(params){
      if(isEqual(params.contact_id,"null"))
      {
        return null;
      }
    return this.store.findRecord('contact',params.contact_id);
  }
}
