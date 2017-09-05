import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      worshipschedule: this.get('store').findAll('worshipschedule')
    })
  }
});
