import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      goodnewsarchive: this.get('store').findAll('goodnewsarchive')
    })
  }
});
