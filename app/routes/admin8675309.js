import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      goodnewsarchive: this.get('store').findAll('goodnewsarchive'),
      goingdeeper: this.get('store').findAll('goingdeeper'),
      pastsermonarchive: this.get('store').findAll('pastsermonarchive'),
      memoryverse: this.get('store').findAll('memoryverse'),
      weeklyscripture: this.get('store').findAll('weeklyscripture'),
      resource: this.get('store').findAll('resource'),
      currentsermon: this.get('store').findAll('currentsermon'),
      sermonparagraph: this.get('store').findAll('sermonparagraph'),
      ministry: this.get('store').findAll('ministry'),
      communityoutreach: this.get('store').findAll('communityoutreach'),
      worshipschedule: this.get('store').findAll('worshipschedule'),
      officestaff: this.get('store').findAll('officestaff'),
      sundayschoolstaff: this.get('store').findAll('sundayschoolstaff'),
      elder: this.get('store').findAll('elder'),
      deacon: this.get('store').findAll('deacon')
    })
  }
});
