import Ember from 'ember';

export default Ember.Route.extend({
  let office = this.get('store').findAll('office-staff')
});
