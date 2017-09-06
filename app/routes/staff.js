import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    const rules = {
      plurals: [
        [ /$/, '-ember']
      ],
      singular: [
        [ /\s$/, '']
      ]
    }
    const inflector = new Ember.Inflector(rules);
    return Ember.RSVP.hash({
      officestaff: this.get('store').findAll('officestaff'),
      sundayschoolstaff: this.get('store').findAll('sundayschoolstaff'),
      elder: this.get('store').findAll('elder'),
      deacon: this.get('store').findAll('deacon')
    })
  }

});
