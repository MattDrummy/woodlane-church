import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://powerful-journey-69992.herokuapp.com',
  namespace: 'api'
});
