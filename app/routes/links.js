import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      goodnewsarchive: this.get('store').findAll('goodnewsarchive'),
      goingdeeper: this.get('store').findAll('goingdeeper'),
      pastsermonarchive: this.get('store').findAll('pastsermonarchive'),
      memoryverse: this.get('store').findAll('memoryverse'),
      weeklyscripture: this.get('store').findAll('weeklyscripture'),
      resource: this.get('store').findAll('resource')
    })
  }
});
