import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      ministry: this.get('store').findAll('ministry'),
      communityoutreach: this.get('store').findAll('communityoutreach')
    })
  }
});
