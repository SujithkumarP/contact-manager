import DS from 'ember-data';

export default DS.Model.extend({

  Name:DS.attr('string'),
  Nickname:DS.attr('string'),
  Birthday:DS.attr('string'),
  email:DS.attr('string'),
  MobileNumber:DS.attr('string')

});
