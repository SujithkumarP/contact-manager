import Route from '@ember/routing/route';

export default class DetailsRoute extends Route {
  model(params){

    return params.mobile_number;
  }
}
